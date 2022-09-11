import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "mui/createEmotionCache";
import lightTheme from "mui/theme/lightTheme";
import { store, persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { fetchProducts } from "redux/products/productsSlice";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// styles
import "scss/globals.scss";
import "video-react/dist/video-react.css";
import "react-toastify/dist/ReactToastify.css";

const clientSideEmotionCache = createEmotionCache();

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  store.dispatch(fetchProducts());

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SessionProvider session={pageProps.session}>
              <ApolloProvider client={client}>
                <SnackbarProvider maxSnack={3}>
                  <Component {...pageProps} />
                </SnackbarProvider>
              </ApolloProvider>
            </SessionProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
