import { create } from "zustand";

type ValueStore = {
  value: string;
  changeValue: (v: string) => void;
};

export const useValueStore = create<ValueStore>((set) => ({
  value: "",
  changeValue: (v: string) => {
    set(() => ({
      value: v,
    }));
  },
}));
