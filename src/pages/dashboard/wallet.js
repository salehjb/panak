import { Box, Button, Grid, Typography } from "@mui/material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
// shared
import Input from "shared/Input";
// datas
import { PAYMENT_GATEWAYS } from "datas";
// components
import PaymentMethod from "shared/PaymentMethod";
// mui => theme
import { flexAlignCenter, flexCenter, flexEnd } from "mui/theme/commonStyles";
// utils
import { priceFormatter } from "utils/functions";

function wallet() {
  return (
    <DashboardLayout>
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            borderLeft: "1px solid #C7CED1",
            pl: 4,
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
          >
            شارژ کیف پول
          </Typography>
          <Box sx={{ width: "100%", mt: 4 }}>
            <Input item={{ type: "text", label: "مبلغ ( تومان )" }} />
          </Box>
          <Box mt={4}>
            <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
              انتخاب روش پرداخت
            </Typography>
            <PaymentMethod gatewaysArray={PAYMENT_GATEWAYS} />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                height: "48px",
                backgroundColor: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.secondary.contrastText,
                fontSize: "15px",
                mt: 6,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              پرداخت
            </Button>
          </Box>
        </Grid>
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
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است،{" "}
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
      </Grid>
    </DashboardLayout>
  );
}

export default wallet;
