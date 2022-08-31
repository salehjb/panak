import { Box, Grid, Typography } from "@mui/material";
// utils
import { priceFormatter } from "utils/functions";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";

function WalletBalance() {
  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          ...flexCenter,
          flexDirection: "column",
          p: 2
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            height: "129px",
            backgroundColor: "primary.main",
            borderRadius: "12px",
            color: "white",
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
            width: "100%",
            border: "1px solid #ECEFF1",
            borderRadius: "12px",
            mt: 12,
            px: 3,
            pb: { xs: 2, md: 0 },
            ...flexAlignCenter,
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Typography fontSize="17px" fontWeight="400" mb={1}>
              خرید در کمترین زمان
            </Typography>
            <Typography fontSize="14px">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است،{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img
              src="/vectors/wallet.png"
              style={{ position: "relative", top: "-2rem" }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default WalletBalance;
