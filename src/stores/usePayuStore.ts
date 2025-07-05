import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PayuStore {
  payuObject: any;
  setPayuObject: (order: any) => void;
  clearPayuData: () => void;
}

export const usePayuStore = create<PayuStore>()(
  persist(
    (set) => ({
      payuObject: null,
      setPayuObject: (obj) => {
        set({ payuObject: obj });
      },
      clearPayuData: () => {
        set({ payuObject: null });
      },
    }),
    {
      name: "payu-store",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);
