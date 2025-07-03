import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CustomerState {
  customerUserId: number | null;
  customerId: number | null;
  costumerDetails:any,
  token: string | undefined | null;
  setCustomerUserId: (id: number) => void;
  setCustomerId: (id: number) => void;
  resetCustomer: () => void;
  sessionToken: () => void;
  setCustomerDetails:(details:any)=>void;
}

export const useCustomerStore = create<CustomerState>()(
  persist(
    (set) => ({
      customerUserId: null,
      customerId: null,
      token: undefined,
      costumerDetails:{
        name:"",
        email:"",
        phone:"",
      },
      setCustomerUserId: (id) => set({ customerUserId: id }),
      setCustomerId: (id) => set({ customerId: id }),
      resetCustomer: () => set({ customerUserId: null, customerId: null }),
      sessionToken: () => {
        const sessionToken = sessionStorage.getItem("x-auth");
        set({ token: sessionToken });
      },
      setCustomerDetails:(details)=>{
        set({
        costumerDetails:details
        })
      }
    }),
    {
      name: "customer-store",
    }
  )
);
