import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "mui/createEmotionCache";
import lightTheme from "mui/theme/lightTheme";
import store from "redux/store";
import { Provider } from "react-redux";
import { fetchArticles } from "redux/articles/articlesSlice";
import { fetchProducts } from "redux/products/productsSlice";
// styles
import "scss/globals.scss";
import "video-react/dist/video-react.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  store.dispatch(fetchArticles())
  store.dispatch(fetchProducts())

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
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
