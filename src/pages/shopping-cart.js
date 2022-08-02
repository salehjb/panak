import { Box, Container, Grid, Typography } from "@mui/material";
// components
import Navbar from "components/layout/Navbar";
import CartComponent from "components/cart-page/CartComponent";
import EmptyCart from "components/cart-page/EmptyCart";
// datas
import { CART_COURSES } from "datas";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function ShoppingCart() {
  return (
    <>
      <Navbar />
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                height: "56px",
                backgroundColor: (theme) => theme.palette.primary.main,
                color: "white",
                my: 3,
                ...flexCenter,
                borderRadius: "8px",
              }}
            >
              <Typography fontSize="18px" fontWeight="400">
                سبد خرید
              </Typography>
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
