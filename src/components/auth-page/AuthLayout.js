import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { dcFlex, flexCenter } from "mui/theme/commonStyles";
// components
import Navbar from "components/layout/Navbar";

function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 80px)",
          ...flexCenter,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              height: "557px",
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              borderRadius: "16px",
              ...dcFlex,
              color: "primary.contrastText",
            }}
          >
            <Grid container height="100%">
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  ...flexCenter,
                }}
              >
                <Box>{children}</Box>
              </Grid>
              <Grid
                item
                xs={5}
                sx={{
                  backgroundColor: "primary.main",
                  borderRadius: "16px 0px 0px 16px",
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Box>
                  <img
                    src={"/logos/logo.png"}
                    alt="logo"
                    width="108px"
                    height="112px"
                  />
                </Box>
                <Typography fontSize="20px" fontWeight="400">
                  پلتفرم آموزش آنلاین پاناک
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AuthLayout;
