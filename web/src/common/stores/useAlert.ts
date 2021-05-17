import create from "zustand";

type AlertState = {
  message: string | null;
  alert: (message: string | null) => void;
};

export const useAlert = create<AlertState>((set) => ({
  message: null,
  alert: (message) => set({ message }),
}));
