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
  settingViewOpenFlag: boolean;
  openSettingView: () => void;
  closeSettingView: () => void;

  darkFlag: boolean;
  setDarkFlag: (flag: boolean) => void;

  unicodeFlag: boolean;
  setUnicodeFlag: (flag: boolean) => void;

  fontSize: number;
  setFontSize: (size: number) => void;
};

export const useSettingStore = create<SettingStore>((set) => ({
  settingViewOpenFlag: false,
  openSettingView() {
    set({ settingViewOpenFlag: true });
  },
  closeSettingView() {
    set({ settingViewOpenFlag: false });
  },

  darkFlag: false,
  fontSize: DEFAULT_FONT_SIZE,

  setDarkFlag(flag) {
    set({ darkFlag: flag });
  },

  unicodeFlag: true,
  setUnicodeFlag(flag) {
    set({ unicodeFlag: flag });
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
