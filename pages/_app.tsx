import type { AppProps } from "next/app";
import { Provider as StoreProvider } from "react-redux";

import { setupStore } from "@/store/store";

import "../styles/globals.scss";

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
