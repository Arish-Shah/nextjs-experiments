import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { useTheme } from "@/stores/useTheme";
import { GlobalStyle } from "@/utils/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
