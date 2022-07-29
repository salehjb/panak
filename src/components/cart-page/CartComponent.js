import Image from "next/image";
// MUI
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
// datas
import { PAYMENT_GATEWAYS } from "../../datas";
// utils
import { priceFormatter } from "../../utils/functions";

function CartComponent({ courses }) {
  const rawAmount = courses.reduce(
    (prevValue, object) => prevValue + object.price,
    0
  );
  const finalAmount = priceFormatter(rawAmount)

  // styles
  const theme = useTheme();
  const styles = {
    rightSide: {
      width: { xs: "60%" },
      border: "1px solid #CFD8DC",
      borderRadius: "12px",
    },
    leftSide: {
      width: { xs: "40%" },
      height: "fit-content",
      border: "1px solid #CFD8DC",
      borderRadius: "24px",
      mr: 3,
      padding: "1rem 2rem",
    },
    input: {
      width: "360px",
      height: "57px",
      backgroundColor: "#F2F6FE",
      borderRadius: "8px",
      padding: "0.5rem",
      fontSize: "17px",
    },
    button: {
      color: "white",
    },
    logoStyles: {
      position: "relative",
      width: "40px",
      height: "40px",
      marginRight: "0.5rem",
    },
    paymentButton: {
      backgroundColor: "#FF9B0C",
      color: "white",
      height: "48px",
      fontSize: "15px",
      marginTop: "3rem",
      "&:hover": {
        backgroundColor: "#e98d0d"
      }
    },
  };

  return (
    <Box
      container
      display="flex"
      justifyContent="space-between"
      color="#455A64"
    >
      <Box sx={styles.rightSide}>
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
          {courses.map((item, index) => (
            <Box key={index}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ padding: "1rem 2rem" }}
              >
                <Box
                  sx={{
                    width: "40%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={item.image}
                    alt="course image"
                    width="44px"
                    height="44px"
                    style={{ borderRadius: "8px" }}
                  />
                  <Box mr={2}>
                    <Typography fontSize="16px" fontWeight="400">
                      {item.title}
                    </Typography>
                    <Typography fontSize="14px">{item.teacher}</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: "50%" }}>{priceFormatter(item.price)}</Box>
                <Box
                  sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton sx={{ padding: "0" }}>
                    <Clear />
                  </IconButton>
                </Box>
              </Box>
              <Divider variant="fullWidth" />
            </Box>
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
            sx={styles.input}
            placeholder="محل وارد کردن کد تخفیف"
            endAdornment={
              <InputAdornment>
                <Button variant="contained" sx={styles.button}>
                  اعمال
                </Button>
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Box sx={styles.leftSide}>
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
          <RadioGroup sx={{ width: "fit-content" }} defaultValue="zarinpal">
            {PAYMENT_GATEWAYS.map((item, index) => (
              <Box mt={5} sx={{ display: "flex", alignItems: "center" }} key={index}>
                <Radio
                  value={item.value}
                  color="secondary"
                  sx={{ padding: "0 !important" }}
                />
                <Box sx={styles.logoStyles}>
                  <Image
                    src={item.image}
                    objectFit="contain"
                    layout="fill"
                  />
                </Box>
                <Box mr={2}>
                  <Typography fontWeight="400">{item.name}</Typography>
                  <Typography>پرداخت از طریق درگاه {item.name}</Typography>
                </Box>
              </Box>
            ))}
          </RadioGroup>
          <Button fullWidth variant="contained" sx={styles.paymentButton}>
            پرداخت
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CartComponent;
