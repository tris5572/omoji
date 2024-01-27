import { create } from "zustand";
import { DEFAULT_FONT_SIZE, MAX_FONT_SIZE, MIN_FONT_SIZE } from "./constants";

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

  fontSize: number;
  setFontSize: (size: number) => void;
};

export const useSettingStore = create<SettingStore>((set) => ({
  darkFlag: false,
  fontSize: DEFAULT_FONT_SIZE,

  setDarkFlag(flag) {
    set({ darkFlag: flag });
  },

  setFontSize(size) {
    let s = size;
    if (size < MIN_FONT_SIZE) {
      s = MIN_FONT_SIZE;
    } else if (MAX_FONT_SIZE < size) {
      s = MAX_FONT_SIZE;
    }
    set({ fontSize: s });
  },
}));
