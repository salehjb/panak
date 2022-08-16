import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";
// components
import Benefits from "./Benefits";

function Header() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        sx={{ display: "flex", color: (theme) => theme.palette.primary.main }}
      >
        <Grid item xs={7} sx={{ ...flexAlignCenter }}>
          <Box sx={{ width: "100%", mr: 10 }}>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "400",
              }}
            >
              داستان برنامه نویس شدنت <br /> از اینجا شروع میشه!
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                width: "70%",
                mt: 4.5,
                color: (theme) => theme.palette.primary.contrastText,
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Typography>
            <Benefits />
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: "100%",
            height: "600px",
            borderRadius: "0px 0px 56px 56px",
            display: "flex",
            alignItems: "flex-end",
            backgroundImage: `url("/vectors/zohal.png"), url("/vectors/breaked-line.png")`,
            backgroundRepeat: "no-repeat, space",
            backgroundPosition: "50px 50px",
            backgroundSize: "auto, 30px auto",
          }}
        >
          <img src="/images/home-header-image.png" alt="header" width="300px" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
