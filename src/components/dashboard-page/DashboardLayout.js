import { Box, Container, Grid } from "@mui/material";
// components
import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({ children }) {
  return (
    <Grid
      container
      sx={{ color: "primary.light" }}
    >
      <Grid item md={2.5} sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={9.5}>
        <Grid item xs={12} sx={{
          position: "sticky",
          top: "0",
          zIndex: "999",
        }}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="xl">
            <Box
              sx={{
                my: 3,
              }}
            >
              {children}
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardLayout;
