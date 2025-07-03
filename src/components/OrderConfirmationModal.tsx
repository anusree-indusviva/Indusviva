import { useEffect, useRef, useState } from "react";
import { X, CreditCard, Shield, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/stores/useOrderStore";
import { useCustomerStore } from "@/stores/useCustomerStore";
import { usePayuStore } from "@/stores/usePayuStore";
import axios from "axios";
import { BASE_URL } from "@/services/api";

export function OrderConfirmationModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { order } = useOrderStore();
  const { costumerDetails } = useCustomerStore();
  const { payuObject, setPayuObject } = usePayuStore();

  const dialogRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onOpenChange]);

  // Builds form data for the payment API request
  const buildFormData = (): FormData => {
    const formData = new FormData();
    const { order_id, order_no, price_details } = order || {};
    const customer = costumerDetails?.data;

    formData.append("order_id", order_id ?? "");
    formData.append("order_no", order_no ?? "");
    formData.append("distributor_id", "MTAwMi8zMjIwOTk1Mzk="); 
    formData.append("provider_ref_no", "");
    formData.append("transaction_mode_id", "6"); 
    formData.append("transaction_type_id", "1"); 
    formData.append("amount", price_details?.total_amount ?? "");
    formData.append("email", customer?.customer_email ?? "");
    formData.append("phone", customer?.customer_phone ?? "");
    formData.append("name", customer?.customer_name ?? "");
    formData.append("cust_gst_optional", "false");
    formData.append("customer_gst_no", "");
    formData.append("customer_aadhar_no", "");
    formData.append("customer_pan_no", "");
    formData.append("temp_id", "");

    return formData;
  };

  const handleLetsGoAPI = async () => {
    if (!order?.order_id || isProcessing) return;

    const token = sessionStorage.getItem("x-auth");
    if (!token) {
      setApiError("Authentication token missing.");
      return;
    }

    setIsProcessing(true);
    setApiError(null);

    try {
      const formData = buildFormData();

      const { status, data } = await axios.post(
        `${BASE_URL}/sales/v1/store/order-payment`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth": token,
          },
        }
      );

      // If API returns success and PayU data, store it and move to next step
      if (status === 200 && data?.data?.payu) {
        setPayuObject(data.data.payu);
        setStep(2);
      } else {
        setApiError("Payment initiation failed. Please try again.");
      }
    } catch (err: any) {
      setApiError(
        err?.response?.data?.message ||
        err.message ||
        "Unexpected error occurred."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  // Don't render if modal is closed
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in-0 duration-300">
      <div className="flex min-h-screen justify-center items-center p-4">
        <div className="w-full max-w-md">
          <div
            ref={dialogRef}
            className="rounded-2xl bg-white shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-white">
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center space-x-3 flex-col md:flex-row gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h1 id="modal-title" className="text-xl font-semibold">
                    Order Confirmation
                  </h1>
                  <p className="text-blue-100 text-sm mt-1">
                    Complete your purchase securely
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-medium text-gray-900 mb-3">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <DetailRow label="Product:" value={order?.price_details?.order_item_list?.map((p: any) => p?.product_name).join(", ")} />
                  <DetailRow label="Amount:" value={`₹${order?.price_details?.total_amount}`} highlight />
                  <DetailRow label="Customer:" value={costumerDetails?.data?.customer_name} />
                  <DetailRow label="Email:" value={costumerDetails?.data?.customer_email} />
                </div>
              </div>

              {/* Secure Payment Info */}
              <div className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4 mb-6">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-800 font-medium">Secure Payment</p>
                  <p className="text-xs text-blue-600 mt-1">
                    You will be redirected to PayU's secure payment gateway to complete your transaction safely.
                  </p>
                </div>
              </div>

              {/* Step 1: Trigger API */}
              {step === 1 ? (
                <div className="space-y-4">
                  {apiError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 text-sm">{apiError}</p>
                    </div>
                  )}
                  <Button
                    onClick={handleLetsGoAPI}
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Processing...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Let's Go!</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              ) : (
                // Step 2: Redirect to PayU
                <form action="https://test.payu.in/_payment" method="post">
                  <input type="hidden" name="key" value={payuObject?.key} />
                  <input type="hidden" name="txnid" value={payuObject?.txnid} />
                  <input type="hidden" name="productinfo" value="iviva" />
                  <input type="hidden" name="amount" value={order?.price_details?.total_amount} />
                  <input type="hidden" name="email" value={payuObject?.email} />
                  <input type="hidden" name="firstname" value={payuObject?.firstname} />
                  <input type="hidden" name="phone" value={payuObject?.phone} />
                  <input type="hidden" name="surl" value="https://yourdomain.com/success" />
                  <input type="hidden" name="furl" value="https://yourdomain.com/failure" />
                  <input type="hidden" name="hash" value={payuObject?.hash} />

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => onOpenChange(false)}
                      className="flex-1 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Proceed to Payment</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t">
              <p className="text-xs text-gray-500 text-center">
                By proceeding, you agree to our terms and conditions.
                <br />
                Transaction ID: {payuObject?.txnid}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for cleaner layout of order detail rows
const DetailRow = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value?: string;
  highlight?: boolean;
}) => {
  return (
    <div className="flex justify-between flex-col md:flex-row gap-2 md:items-center">
      <span className="text-gray-600">{label}</span>
      <span
        className={`font-medium text-gray-900 ${
          highlight ? "text-lg text-green-600 font-semibold" : ""
        }`}
      >
        {value || "--"}
      </span>
    </div>
  );
};
