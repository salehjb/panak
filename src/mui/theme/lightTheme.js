import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  mode: "light",
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
    background: {
      default: "#f1f1f1",
    },
    primary: {
      light: "#0E363F",
      main: "#0E363F",
      dark: "#0E363F",
      contrastText: "#37474F",
    },
    secondary: {
      light: "#FF9B0C",
      main: "#FF9B0C",
      dark: "#FF9B0C",
      contrastText: "#fff",
    },
  },
});

export default lightTheme;
