import create from "zustand";
import { DefaultTheme } from "styled-components";

type ThemeState = {
  theme: DefaultTheme;
  changeTheme: (theme: DefaultTheme) => void;
};

export const useTheme = create<ThemeState>((set) => ({
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
