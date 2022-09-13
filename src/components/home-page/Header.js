import { Box, Grid, Typography } from "@mui/material";
// mui => theme
import {
  dcFlex,
  flexAlignCenter,
  flexCenter,
  flexEnd,
} from "mui/theme/commonStyles";
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
            <Description sx={{ fontSize: "18px" }}>
              گروه نرم افزاری پاناک، جدیدترین و بروزترین تکنولوژی های برنامه
              نویسی را در قالب دوره های آموزشی پروژه محور به کاربران پارسی زبان
              در سر تا سر دنیا ارائه میدهد. از ابتدای مسیر برنامه نویس شدن تا
              ورود به بازار کار، پاناک با افتخار در کنار شماست.
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
          position: "relative",
          display: { xs: "none", md: "flex" },
          alignItems: "flex-end",
          backgroundColor: "primary.main",
          width: "100%",
          height: "calc(100vh - 80px)",
          borderRadius: "0 0 56px 0",
          backgroundImage: `url(/vectors/zohal.png), url(/vectors/education-cap.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "70px 100px, 440px 80px",
          backgroundSize: "auto",
        }}
      >
        <Box
          sx={{
            top: "200px",
            right: "-20px",
            width: "100px",
            height: "100px",
            backgroundColor: "white",
            position: "absolute",
            borderRadius: "8px",
            transform: "rotate(19deg)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              width: "100%",
              height: "100%",
              backgroundColor: "primary.main",
              borderRadius: "8px",
              ...flexCenter,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
              alt="javascript"
              width="60px"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "50px",
            right: "-50px",
            width: "100px",
            height: "100px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              width: "100%",
              height: "100%",
              backgroundColor: "primary.main",
              borderRadius: "8px",
              ...flexCenter,
            }}
          >
            <img
              src="https://nerdysoft.com/wp-content/uploads/2021/11/java-14-1.svg"
              alt="javascript"
              width="50px"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Box>
        <img
          src="/images/home-header-image.png"
          alt="header"
          width="370px"
          style={{ zIndex: "1000" }}
        />
        <Box sx={{ position: "absolute", left: 0, ...dcFlex }}>
          {[0, 1, 2].map((_, index) => (
            <img src="/vectors/breaked-line.png" width="400px" key={index} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
