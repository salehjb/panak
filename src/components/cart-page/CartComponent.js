import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
// datas
import { PAYMENT_GATEWAYS } from "datas";
// utils
import { priceFormatter } from "utils/functions";
// mui => theme
import { flexBetween } from "mui/theme/commonStyles";
// components
import PaymentMethod from "shared/PaymentMethod";
import CartItem from "./CartItem";

function CartComponent({ carts }) {
  const rawAmount = carts.reduce((acc, curr) => {
    return acc + curr.price;
  } , 0);
  const finalAmount = priceFormatter(rawAmount);

  return (
    <Box
      container
      sx={{
        ...flexBetween,
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Box
        sx={{
          width: { xs: "60%" },
          border: "1px solid #CFD8DC",
          borderRadius: "12px",
        }}
      >
        <Box display="flex" sx={{ padding: "1rem" }}>
          <Typography
            sx={{ width: "40%", paddingRight: "1rem", fontWeight: "400" }}
          >
            نام محصول
          </Typography>
          <Typography sx={{ width: "60%", fontWeight: "400" }}>
            قیمت ( تومان )
          </Typography>
        </Box>
        <Divider variant="fullWidth" />
        <Box>
          {carts.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </Box>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography fontSize="17px">جمع مبلغ ( تومان )</Typography>
            <Typography mr={5} fontSize="20px" fontWeight="400">
              {finalAmount}
            </Typography>
          </Box>
          <InputBase
            sx={{
              width: "360px",
              height: "57px",
              backgroundColor: "#F2F6FE",
              borderRadius: "8px",
              p: 1,
              fontSize: "17px",
            }}
            placeholder="محل وارد کردن کد تخفیف"
            endAdornment={
              <InputAdornment>
                <Button variant="contained" sx={{ color: "white" }}>
                  اعمال
                </Button>
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "40%" },
          height: "fit-content",
          border: "1px solid #CFD8DC",
          borderRadius: "24px",
          mr: 3,
          py: 2,
          px: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="16px" fontWeight="400">
            مبلغ نهایی ( تومان )
          </Typography>
          <Typography fontSize="20px" fontWeight="400">
            {finalAmount}
          </Typography>
        </Box>
        <Divider variant="fullWidth" sx={{ margin: "1rem 0" }} />
        <Box>
          <Typography fontWeight="400" fontSize="16px">
            انتخاب روش پرداخت
          </Typography>
          <PaymentMethod gatewaysArray={PAYMENT_GATEWAYS} />
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.secondary.contrastText,
              height: "48px",
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
      </Box>
    </Box>
  );
}

export default CartComponent;
