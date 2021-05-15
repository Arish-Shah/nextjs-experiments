import * as nextImage from "next/image";
import { ThemeProvider } from "styled-components";

import { useTheme } from "@/stores/useTheme";
import { GlobalStyle } from "@/utils/globalStyle";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const decorators = [
  (Story) => {
    const theme = useTheme((state) => state.theme);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
