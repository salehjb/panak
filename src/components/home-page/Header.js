import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";
import Description from "shared/Description";
// components
import Benefits from "./Benefits";

function Header() {
  return (
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={7} sx={{ ...flexAlignCenter }}>
          <Box sx={{ width: "100%" }}>
            <Typography fontSize="45px" fontWeight="500" color="primary.main">
              داستان برنامه نویس شدنت <br /> از اینجا شروع میشه!
            </Typography>
            <Box sx={{ width: "80%", my: 2 }}>
              <Description>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </Description>
            </Box>
            <Benefits />
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: "600px",
            borderRadius: "0 0 56px 0",
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
  );
}

export default Header;
