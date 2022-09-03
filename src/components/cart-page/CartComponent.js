import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
// utils
import { priceFormatter } from "utils/functions";
// mui => theme
import { flexBetween, flexBetweenCenter } from "mui/theme/commonStyles";
// components
import CartItem from "./CartItem";

function CartComponent({ carts }) {
  const rawAmount = carts.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const finalAmount = priceFormatter(rawAmount);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 0, md: 3 }}
        sx={{
          ...flexBetween,
          color: "primary.light",
        }}
      >
        <Grid item xs={12} md={8}>
          <Box>
            <Box>
              {carts.map((course, index) => (
                <Box
                  sx={{ mb: index + 1 !== carts.length ? 2 : 0 }}
                  key={course.id}
                >
                  <CartItem course={course} key={course.id} />
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ mt: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              p: 2,
            }}
          >
            <Box sx={{ ...flexBetweenCenter }}>
              <Typography fontSize="17px" fontWeight="400">
                جمع مبلغ :
              </Typography>
              <Typography fontSize="18px" fontWeight="400">
                {finalAmount} تومان
              </Typography>
            </Box>
            <Divider variant="fullWidth" sx={{ mt: 1, mb: 2 }} />
            <InputBase
              sx={{
                width: "100%",
                height: "57px",
                border: "1px solid #CFD8DC",
                borderRadius: "8px",
                p: 1,
                pl: 0,
                fontSize: "17px",
                mb: 4,
              }}
              placeholder="محل وارد کردن کد تخفیف"
              endAdornment={
                <InputAdornment position="end">
                  <Button variant="contained" color="primary">
                    اعمال
                  </Button>
                </InputAdornment>
              }
            />
            <Box sx={{ ...flexBetweenCenter, mb: 1 }}>
              <Typography sx={{ fontSize: "16px" }}>میزان تخفیف :</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                {priceFormatter(0)} تومان
              </Typography>
            </Box>
            <Box sx={{ ...flexBetweenCenter }}>
              <Typography sx={{ fontSize: "16px" }}>مبلغ نهایی :</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                {finalAmount} تومان
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" color="secondary" fullWidth>
                تکمیل سفارش
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CartComponent;
