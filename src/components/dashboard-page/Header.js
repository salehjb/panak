import Link from "next/link";
import { Avatar, Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "60px",
        ...flexAlignCenter,
      }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ ...flexAlignCenter }}>
          <Grid item flexGrow={1}>
            <Box sx={{ ...flexAlignCenter }}>
              <Link href="/">
                <MuiLink sx={{ ...flexAlignCenter }}>
                  <img src="/logos/logo-red.png" />
                  <Typography
                    sx={{
                      mr: 1,
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    پاناک
                  </Typography>
                </MuiLink>
              </Link>
            </Box>
          </Grid>
          <Grid item sx={{ ...flexAlignCenter }}>
            <Avatar src="https://assets-prd.ignimgs.com/2021/11/30/cq5dam-web-1200-675-1638302563149.jpg" />
            <Typography fontSize="15px" fontWeight="400" mr={2}>
              خوش اومدی، امیلیا عزیز
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
