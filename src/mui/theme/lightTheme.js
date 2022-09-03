import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  mode: "light",
  direction: "rtl",
  typography: {
    fontFamily: '"YekanBakh", "Roboto", "Arial"',
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
      light: "#455A64",
      main: "#0E363F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF9B0C",
      dark: "#e98d0d",
      contrastText: "#fff",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "subtitle2",
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: "row",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: "primary.light",
          cursor: "pointer",
          margin: 0,
          padding: 0,
        },
        underline: "none",
      },
    },
    MuiButton: {
      defaultProps: {
        size: "medium",
        disableRipple: false,
        sx: {
          height: "47px",
          p: 2,
          borderRadius: "8px",
        },
      },
      variant: "text",
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default lightTheme;
