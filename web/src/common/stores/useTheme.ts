import create from "zustand";
import { DefaultTheme } from "styled-components";

type ThemeStore = {
  theme: DefaultTheme;
  changeTheme: (theme: DefaultTheme) => void;
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: {
    image: "/assets/bg.gif",
    text: "#333333",
    background: "#9ae4e8",
    links: "#0084b4",
    sidebar: "#dfc",
    sidebarBorder: "#bddcad",
    repeat: false,
  },
  changeTheme: (theme) => set({ theme }),
}));
