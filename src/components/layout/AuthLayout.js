import Image from "next/image";
// MUI
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
// components
import Navbar from "../../components/layout/Navbar"

function AuthLayout({ children }) {
  // style
  const theme = useTheme();
  const styles = {
    boxContainer: {
      width: "100%",
      height: "557px",
      backgroundColor: "white",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
      borderRadius: "16px",
      display: "flex",
      flexDirection: "column",
      color: "#455A64",
    },
    rightSide: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    leftSide: {
      backgroundColor: "#0E363F",
      height: "100%",
      borderRadius: "16px 0px 0px 16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    logoBox: {
      position: "relative",
      width: "108px",
      height: "112px",
    },
  };

  return (
    <>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="lg">
          <Box sx={styles.boxContainer}>
            <Grid container height="100%">
              <Grid item xs={7} sx={styles.rightSide}>
                <Box>{children}</Box>
              </Grid>
              <Grid item xs={5} sx={styles.leftSide}>
                <Box sx={styles.logoBox}>
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
    </>
  );
}

export default AuthLayout;
