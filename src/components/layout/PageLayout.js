// MUI
import { Box, Container, Typography, useTheme } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

function PageLayout({ title, children }) {
  // styles
  const theme = useTheme();
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "&::before": {
        position: "absolute",
        content: '""',
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        height: "260px",
        top: "80px",
        borderRadius: "0px 0px 72px 72px",
        zIndex: -1,
      },
    },
    title: {
      color: theme.palette.common.white,
      fontSize: "40px",
      margin: "1rem 0",
      textAlign: "center",
    },
    boxContainer: {
      width: "100%",
      backgroundColor: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      borderRadius: "32px",
      display: "flex",
      flexDirection: "column",
      padding: "0 4rem",
      color: "#455A64",
      paddingBottom: "2rem",
    },
  };

  return (
    <>
      <Navbar />
      <Box sx={styles.box}>
        <Container maxWidth="xl">
          <Typography sx={styles.title}>{title}</Typography>
          <Box sx={styles.boxContainer}>{children}</Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default PageLayout;
