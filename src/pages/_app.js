import { useState, createContext } from "react";
import PropTypes from "prop-types";
// styles
import "../scss/globals.scss";
// components
import Layout from "../components/layout/Layout";
// MUI
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../mui/createEmotionCache";
import darkTheme from "../mui/theme/darkTheme";
import lightTheme from "../mui/theme/lightTheme";

const clientSideEmotionCache = createEmotionCache();

const Context = createContext();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Context.Provider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </Context.Provider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};