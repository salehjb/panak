import { Box, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllCarts } from "redux/cart/cartSlice";
// components
import Navbar from "components/layout/Navbar";
import CartComponent from "components/cart-page/CartComponent";
import EmptyCart from "components/cart-page/EmptyCart";
import Meta from "components/Meta";
import HeadTitle from "shared/HeadTitle";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function ShoppingCart() {
  const carts = useSelector(getAllCarts);

  return (
    <>
      <Navbar />
      <Meta title="پاناک | سبد خرید" />
      <HeadTitle title="سبد خرید" />
      <Box sx={{ mb: 2 }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12}>
              {carts.length > 0 ? (
                <CartComponent carts={carts} />
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
