import * as nextImage from "next/image";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../src/utils/globalStyles";
import { useTheme } from "../src/stores/useTheme";

export const decorators = [
  (Story) => {
    const theme = useTheme((state) => state.theme);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
