// MUI
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
// components
import Navbar from "../components/layout/Navbar";
import CartComponent from "../components/cart-page/CartComponent";
import EmptyCart from "../components/cart-page/EmptyCart";
// datas
import { CART_COURSES } from "../datas";

function ShoppingCart() {
  // styles
  const theme = useTheme();
  const styles = {
    header: {
      height: "56px",
      backgroundColor: "#0E363F",
      color: "white",
      margin: "1.5rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
  };

  return (
    <>
      <Navbar />
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} sx={styles.header}>
              <Typography fontSize="18px" fontWeight="400">سبد خرید</Typography>
            </Grid>
            <Grid item xs={12}>
              {CART_COURSES.length > 0 ? (
                <CartComponent courses={CART_COURSES} />
              ) : (
                <EmptyCart />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ShoppingCart;
