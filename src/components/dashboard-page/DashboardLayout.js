import { Box, Container, Grid } from "@mui/material";
// components
import Sidebar from "./Sidebar";
import Header from "./Header";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function DashboardLayout({ children }) {
  return (
    <Grid
      container
      sx={{ color: "primary.contrastText" }}
    >
      <Grid item xs={2.5}>
        <Sidebar />
      </Grid>
      <Grid item xs={9.5}>
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
                backgroundColor: "white",
                width: "100%",
                borderRadius: "12px",
                my: 3,
                p: 2,
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
