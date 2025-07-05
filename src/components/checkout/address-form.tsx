import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, MapPin, Phone, Home } from "lucide-react";
import { toast } from "sonner";
import { useAddressStore } from "@/stores/usAddressStore";
import { fetchLocations } from "@/services/api";
import { syncOrderSummary } from "@/lib/syncOrderSummary";

export default function AddressForm() {
  const { setSelectedAddress, selectedAddress } = useAddressStore();
  const [isChecking, setIsChecking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>({
    address_line1: selectedAddress?.address_line1 || "",
    address_line2: selectedAddress?.address_line2 || "",
    postalcode_id: selectedAddress?.postalcode_id || "",
    post_name: selectedAddress?.post_name || "",
    is_service_available: selectedAddress?.is_service_available || 0,
    city_id: selectedAddress?.city_id || 0,
    city: selectedAddress?.city || "",
    district_id: selectedAddress?.district_id || 0,
    district: selectedAddress?.district || "",
    state_id: selectedAddress?.state_id || 0,
    state: selectedAddress?.state || "",
    country_id: selectedAddress?.country_id || 89,
    country: selectedAddress?.country || "India",
    contact_no: selectedAddress?.contact_no || "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.address_line1?.trim()) {
      newErrors.address_line1 = "Address Line 1 is required";
    }
    if (!formData.postalcode_id) {
      newErrors.postalcode_id = "Postal Code ID is required";
    }
    if (!formData.contact_no?.trim()) {
      newErrors.contact_no = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact_no.replace(/\D/g, ""))) {
      newErrors.contact_no = "Please enter a valid 10-digit contact number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckPostalCode = async () => {
    if (!formData.postalcode_id) {
      toast.error("Please enter a Postal Code ID");
      return;
    }

    setIsChecking(true);
    try {
      const response = await fetchLocations();
      const matched = response.data.data.find(
        (item: any) => item.postalcode_id === Number(formData.postalcode_id)
      );

      if (matched) {
        setFormData((prev: any) => ({
          ...prev,
          post_name: matched.post_name,
          is_service_available: matched.is_service_available,
          city_id: matched.city_id,
          city: matched.city_name,
          district_id: matched.district_id,
          district: matched.district_name,
          state_id: matched.state_id,
          state: matched.state_name,
          country_id: matched.country_id,
          country: matched.country_name,
        }));
        toast.success("Postal code found and details fetched.");
      } else {
        toast.error("Postal code not found.");
        setFormData((prev: any) => ({
          ...prev,
          post_name: "",
          city: "",
          district: "",
          state: "",
          country: "",
          is_service_available: 0,
        }));
      }
    } catch {
      toast.error("Failed to check postal code. Try again.");
    } finally {
      setIsChecking(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      setSelectedAddress(formData);
      syncOrderSummary();
      toast.success(
        `Address saved: ${formData.postalcode_id} - ${formData.post_name}`
      );
    } catch {
      toast.error("Failed to save address.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
      <Card className="w-full shadow-lg">
        <CardHeader className="space-y-2 p-4 sm:p-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-teal-600" />
            <CardTitle className="text-lg sm:text-xl">
              Shipping Address
            </CardTitle>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Provide your complete shipping address
          </p>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Postalcode_id & Check */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div className="space-y-2 sm:col-span-2">
                <Label>Postal Code ID <span className="text-red-500">*</span></Label>
                <Input
                  type="number"
                  placeholder="Enter Postal Code ID"
                  value={formData.postalcode_id}
                  onChange={(e) => handleInputChange("postalcode_id", e.target.value)}
                  className={errors.postalcode_id ? "border-red-500" : ""}
                />
                {errors.postalcode_id && (
                  <p className="text-xs text-red-500">{errors.postalcode_id}</p>
                )}
              </div>
              <Button
                type="button"
                onClick={handleCheckPostalCode}
                disabled={isChecking}
              >
                {isChecking ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Checking...
                  </>
                ) : (
                  "Check"
                )}
              </Button>
            </div>

            {/* Post Name (read-only) */}
            <div className="space-y-2">
              <Label>Post Office Name</Label>
              <Input
                readOnly
                value={formData.post_name}
                placeholder="Fetched from Postal Code"
              />
            </div>

            {/* Address Line 1 */}
            <div className="space-y-2">
              <Label>
                <Home className="h-4 w-4 inline-block" /> Address Line 1 <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.address_line1}
                onChange={(e) => handleInputChange("address_line1", e.target.value)}
                placeholder="House/Street/Area"
                className={errors.address_line1 ? "border-red-500" : ""}
              />
              {errors.address_line1 && (
                <p className="text-xs text-red-500">{errors.address_line1}</p>
              )}
            </div>

            {/* Address Line 2 */}
            <div className="space-y-2">
              <Label>Address Line 2</Label>
              <Input
                value={formData.address_line2}
                onChange={(e) => handleInputChange("address_line2", e.target.value)}
                placeholder="Landmark or Optional Info"
              />
            </div>

            {/* Auto-filled Location */}
            {formData.city && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>City</Label>
                  <Input value={formData.city} readOnly className="bg-muted" />
                </div>
                <div>
                  <Label>District</Label>
                  <Input value={formData.district} readOnly className="bg-muted" />
                </div>
                <div>
                  <Label>State</Label>
                  <Input value={formData.state} readOnly className="bg-muted" />
                </div>
                <div>
                  <Label>Country</Label>
                  <Input value={formData.country} readOnly className="bg-muted" />
                </div>
              </div>
            )}

            {/* Contact Number */}
            <div className="space-y-2">
              <Label>
                <Phone className="h-4 w-4 inline-block" /> Contact Number <span className="text-red-500">*</span>
              </Label>
              <Input
                value={formData.contact_no}
                onChange={(e) => handleInputChange("contact_no", e.target.value)}
                placeholder="10-digit number"
                className={errors.contact_no ? "border-red-500" : ""}
              />
              {errors.contact_no && (
                <p className="text-xs text-red-500">{errors.contact_no}</p>
              )}
            </div>

            {/* Submit */}
            <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                "Save Address"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
