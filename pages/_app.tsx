import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "../app/store";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
