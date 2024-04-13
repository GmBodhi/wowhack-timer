import { create, createStore } from "zustand";

export const useStore = create<{
  adActive: boolean;
  setAdActive: (adActive: boolean) => void;
}>((set) => ({
  adActive: true,
  setAdActive: (adActive) => set({ adActive }),
}));
