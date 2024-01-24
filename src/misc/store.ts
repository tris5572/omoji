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

// --------------------------------------------------------------------------------

type SettingStore = {
  darkFlag: boolean;
  setDarkFlag: (flag: boolean) => void;
};

export const useSettingStore = create<SettingStore>((set) => ({
  darkFlag: false,

  setDarkFlag(flag) {
    set({ darkFlag: flag });
  },
}));
