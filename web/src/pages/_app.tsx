import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { useTheme } from "@/common/stores/useTheme";
import { GlobalStyles } from "@/common/utils/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useTheme((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
