import { Box, Grid, Typography } from "@mui/material";
// utils
import { priceFormatter } from "utils/functions";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";

function WalletBalance() {
  return (
    <Grid item xs={8} sx={{ ...flexCenter, flexDirection: "column" }}>
      <Box
        sx={{
          width: "40%",
          height: "129px",
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: "12px",
          color: "white",
          p: 2,
          ...flexCenter,
          flexDirection: "column",
          backgroundImage:
            "url(/vectors/circle1.png), url(/vectors/circle2.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right, right top",
        }}
      >
        <Typography fontSize="16px">موجودی فعلی</Typography>
        <Typography fontSize="25px" mt={1.5}>
          {priceFormatter(3459000)} تومان
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          border: "1px solid #ECEFF1",
          borderRadius: "12px",
          mt: 12,
          px: 3,
          ...flexAlignCenter,
        }}
      >
        <Box sx={{ width: "70%" }}>
          <Typography fontSize="17px" fontWeight="400" mb={1}>
            خرید در کمترین زمان
          </Typography>
          <Typography fontSize="14px">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "30%", ...flexEnd }}>
          <img
            src="/vectors/wallet.png"
            style={{ position: "relative", top: "-2rem" }}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default WalletBalance;
