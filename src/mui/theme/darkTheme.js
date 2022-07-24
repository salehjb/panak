import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  mode: "dark",
  direction: "rtl",
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
    fontWeightFat: 500,
  },
  palette: {
    primary: {
      light: "#0E363F",
      main: "#0E363F",
      dark: "#0E363F",
    },
    secondary: {
      light: "#0E363F",
      main: "#0E363F",
      dark: "#0E363F",
    },
  }
});

export default darkTheme;