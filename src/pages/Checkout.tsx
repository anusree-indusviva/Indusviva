import { useState } from "react";
import axios from "axios";

// UI Components
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Package, ArrowRight, AlertCircle, Truck } from "lucide-react";
import NavigationHeroSection from "@/components/NavigationHeroSection";
import { OrderConfirmationModal } from "@/components/OrderConfirmationModal";

// Stores
import { useDialogStore } from "@/stores/usedialogStrore";
import { useCustomerStore } from "@/stores/useCustomerStore";
import { useAddressStore } from "@/stores/usAddressStore";
import { useOrderStore } from "@/stores/useOrderStore";
import { useCartStore } from "@/stores/useCartStore";

// Utilities
import { syncOrderSummary } from "@/lib/syncOrderSummary";

// API base URL from env
const BASE_URL = import.meta.env.VITE_APP_API_URL;

export default function CheckoutPage() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);

  const { openDialog } = useDialogStore();
  const { setOrder } = useOrderStore();
  const { cartSummary } = useCartStore();
  const { selectedAddress } = useAddressStore();
  const { customerUserId, costumerDetails } = useCustomerStore();

  // Construct order payload using selected address and cart summary
  const payload = {
    platformId: 7,
    delivery_mode_id: 3,
    address: {
      billing_same_as_shipping: 1,
      shipping: {
        id: null,
        address_line1: selectedAddress?.address_line1,
        address_line2: selectedAddress?.address_line2,
        is_billing_address: 0,
        is_shipping_address: 1,
        postcode_id: selectedAddress?.postalcode_id,
        city_id: selectedAddress?.city_id,
        district_id: selectedAddress?.district_id,
        state_id: selectedAddress?.state_id,
        country_id: selectedAddress?.country_id,
        postalcode: Number(selectedAddress?.postalcode),
        postalname: selectedAddress?.postalname,
        city: selectedAddress?.city,
        district: selectedAddress?.district,
        state: selectedAddress?.state,
        country: selectedAddress?.country,
        contact_no: selectedAddress?.contact_no,
        postalcode_id: null,
        post_name: "xyz",
        is_service_available: 1,
      },
      billing: {
        id: null,
        address_line1: selectedAddress?.address_line1,
        address_line2: selectedAddress?.address_line2,
        is_billing_address: 1,
        is_shipping_address: 0,
        postcode_id: selectedAddress?.postalcode_id,
        city_id: selectedAddress?.city_id,
        district_id: selectedAddress?.district_id,
        state_id: selectedAddress?.state_id,
        country_id: selectedAddress?.country_id,
        postalcode: Number(selectedAddress?.postalcode),
        postalname: selectedAddress?.postalname,
        city: selectedAddress?.city,
        district: selectedAddress?.district,
        state: selectedAddress?.state,
        country: selectedAddress?.country,
        contact_no: selectedAddress?.contact_no,
        postalcode_id: null,
        post_name: "xyz",
        is_service_available: 1,
      },
    },
    order_items: cartSummary?.order_item_list,
    is_faster_delivery: 1,
    otp_verification_status: 0,
    is_voucher_applied: 0,
    voucher: [],
    customer_fullname: costumerDetails?.data?.customer_name,
    customer_id: costumerDetails?.data?.customer_user_id,
    customer_phone: costumerDetails?.data?.customer_phone,
    customer_email: costumerDetails?.data?.customer_email,
    cust_gst_optional: false,
    customer_gst_no: null,
    customer_aadhar_no: null,
    customer_pan_no: null,
    campaign_id: null,
    temp_id: "",
  };

  // Place Order Handler
  const handlePlaceOrder = async () => {
    const token = sessionStorage.getItem("x-auth");

    // Redirect to login if user isn't authenticated
    if (!customerUserId || !token) {
      openDialog();
      return;
    }

    try {
      setLoader(true);

      // Sync cart before placing order
      await syncOrderSummary();

      const res = await axios.post(`${BASE_URL}/sales/v1/store/place-order`, payload, {
        headers: {
          "Content-Type": "application/json",
          "x-auth": token,
        },
      });

      // Order success handler
      if (res.status === 200) {
        setOrder(res.data.data);
        setOpen(true);
      }
    } catch (error) {
      console.error("Order placement failed:", error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <section>
      {/* Hero Section */}
      <NavigationHeroSection title="Checkout" path="Checkout" />

      {/* Main Checkout Summary Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50 my-10">
        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

        {/* Cart Item List */}
        <div className="space-y-4 border-b pb-6">
          {cartSummary?.order_item_list?.map((product: any) => (
            <div key={product?.id} className="flex justify-between text-sm">
              <span>
                {product?.product_name} x <strong>{product?.quantity}</strong>
              </span>
              <span>₹{product?.item_total_amount?.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>₹{cartSummary?.total_price}</span>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between text-sm sm:text-base text-gray-600">
            <span>Subtotal</span>
            <span>₹{cartSummary?.total_price}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-gray-600">
            <span className="flex items-center gap-1">
              <Truck className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Shipping</span>
              <span className="sm:hidden">Ship</span>
            </span>
            <span>₹{cartSummary?.total_handling_charge}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-gray-600">
            <span>Tax (18%)</span>
            <span>₹{cartSummary?.total_tax}</span>
          </div>
          <div className="flex justify-between text-sm sm:text-base text-gray-600">
            <span>PV </span>
            <span>₹{cartSummary?.total_pv}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg sm:text-xl font-bold text-gray-900">
            <span>Total</span>
            <span>₹{cartSummary?.total_amount}</span>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              className="mt-0.5 sm:mt-1"
            />
            <Label htmlFor="terms" className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              I agree to the terms and privacy policy
            </Label>
          </div>
        </div>

        {/* Place Order CTA */}
        <div className="space-y-2 sm:space-y-3">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 text-sm sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
            disabled={!selectedAddress || !termsAccepted || loader}
            onClick={handlePlaceOrder}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <Package className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Place Order</span>
              <span className="sm:hidden">Order Now</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Button>

          {/* Alert if user missed address or terms */}
          {(!selectedAddress || !termsAccepted) && (
            <div className="flex items-start gap-2 text-xs sm:text-sm text-amber-600 bg-amber-50 p-2 sm:p-3 rounded-lg">
              <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>
                Please
                {!selectedAddress && " add delivery address"}
                {!selectedAddress && !termsAccepted && " and"}
                {!termsAccepted && " accept terms"} to continue
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Order success modal */}
      <OrderConfirmationModal open={open} onOpenChange={setOpen} />
    </section>
  );
}