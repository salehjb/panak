import { Box, Container, Typography } from "@mui/material";
// components
import Footer from "./Footer";
import Navbar from "./Navbar";
// mui => theme
import { dcFlex, flexAlignCenter } from "mui/theme/commonStyles";

function PageLayout({ title, children }) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          ...flexAlignCenter,
          flexDirection: "column",
          "&::before": {
            position: "absolute",
            content: '""',
            backgroundColor: "primary.main",
            width: "100%",
            height: "260px",
            top: "80px",
            borderRadius: "0px 0px 72px 72px",
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              color: (theme) => theme.palette.common.white,
              fontSize: "40px",
              my: "1rem",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              borderRadius: "32px",
              color: "primary.contrastText",
              ...dcFlex,
              px: "4rem",
              pb: "2rem",
            }}
          >
            {children}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default PageLayout;
