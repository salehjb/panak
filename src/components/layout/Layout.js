// MUI
import { Box, Container } from "@mui/material";
// components
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box component="div" sx={{ padding: "0 24px", margin: "1rem 0" }}>{children}</Box>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
