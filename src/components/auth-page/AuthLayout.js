import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { dcFlex, flexCenter } from "mui/theme/commonStyles";

function AuthLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          ...flexCenter,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              width: "100%",
              height: { xs: "auto", md: "600px" },
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
              borderRadius: "16px",
              ...dcFlex,
              color: "primary.light",
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
                <Box
                  sx={{ width: { xs: "100%", md: "70%" }, p: 2 }}
                >
                  {children}
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "primary.main",
                    borderRadius: "16px 0px 0px 16px",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <img
                    src={"/logos/logo.png"}
                    alt="logo"
                    width="108px"
                    height="112px"
                  />
                  <Typography fontSize="20px" fontWeight="400">
                    پلتفرم آموزش آنلاین پاناک
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default AuthLayout;
