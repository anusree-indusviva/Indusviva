import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Address {
  address_line1?: string;
  address_line2?: string;
  postalcode_id: number;
  postalcode: number;
  post_name: string;
  postalname?: string;
  is_service_available: number;
  city_id: number;
  city: string;
  district_id: number;
  district: string;
  state_id: number;
  state: string;
  country_id: number;
  country: string;
  contact_no?: string;
  postcode_id: number;
}

interface AddressStore {
  selectedAddress: Address | null;
  setSelectedAddress: (address: Address) => void;
  updateAddress: (updatedFields: Partial<Address>) => void;
}

export const useAddressStore = create<AddressStore>()(
  persist(
    (set, get) => ({
      selectedAddress: {
        address_line1: "",
        address_line2: "",
        postalcode_id: 0,
        postcode_id: 0,
        postalcode: 0,
        post_name: "",
        postalname: "",
        is_service_available: 1,
        city_id: 0,
        city: "",
        district_id: 0,
        district: "",
        state_id: 8,
        state: "",
        country_id: 0,
        country: "",
        contact_no: "",
      },
      setSelectedAddress: (address) => {
        set({ selectedAddress: address });
      },
      updateAddress: (updatedFields) => {
        const currentAddress = get().selectedAddress;
        if (!currentAddress) return;

        const updatedAddress = {
          ...currentAddress,
          ...updatedFields,
        };

        set({ selectedAddress: updatedAddress });
      },
    }),
    {
      name: "selected-address-store",
    }
  )
);
