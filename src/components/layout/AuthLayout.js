import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { dcFlex, flexCenter } from "mui/theme/commonStyles";

function AuthLayout({ children }) {
  return (
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
              xs={7}
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
                ...flexCenter,
                flexDirection: "column",
                color: "white",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "108px",
                  height: "112px",
                }}
              >
                <Image
                  src={"/logos/logo.png"}
                  alt="logo"
                  objectFit="contain"
                  layout="fill"
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
  );
}

export default AuthLayout;
