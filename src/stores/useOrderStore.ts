import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OrderStore {
  order: any;
  setOrder: (order: any) => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      order: null,

      setOrder: (order) => {
        set({ order: order });
      },
    }),
    {
      name: "order-store",
    }
  )
);
