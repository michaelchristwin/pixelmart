import { Product } from "@/lib/mockdata";
import { create } from "zustand";

interface StoreState {
  cart: Product[];
  addItem: (item: Product) => void;
  clearCart: () => void;
}

const useStore = create<StoreState>()((set) => ({
  cart: [],
  addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
  clearCart() {
    set({ cart: [] });
  },
}));

export default useStore;
