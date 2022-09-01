import { Box, Container, Grid, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";
import Description from "shared/Description";
// components
import Benefits from "./Benefits";

function Header() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Grid
        item
        xs={12}
        md={7}
        sx={{ ...flexAlignCenter, mt: { xs: 3, md: 0 }, p: 2 }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "45px" },
              fontWeight: "500",
              color: "primary.main",
            }}
          >
            داستان برنامه نویس شدنت از اینجا شروع میشه!
          </Typography>
          <Box sx={{ width: { xs: "100%", md: "80%" }, my: 2 }}>
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
        xs={12}
        md={5}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "flex-end",
          backgroundColor: "primary.main",
          width: "100%",
          height: "calc(100vh - 80px)",
          borderRadius: "0 0 56px 0",
          backgroundImage: `url("/vectors/zohal.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50px 50px",
          backgroundSize: "auto",
        }}
      >
        <img src="/images/home-header-image.png" alt="header" width="370px" />
      </Grid>
    </Grid>
  );
}

export default Header;
