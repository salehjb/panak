import { Clear } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { removeItem } from "redux/cart/cartSlice";
import { useDispatch } from "react-redux";
// utils
import { priceFormatter } from "utils/functions";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ padding: "1rem 2rem" }}>
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
          <IconButton
            sx={{ padding: "0" }}
            onClick={() => dispatch(removeItem(item))}
          >
            <Clear />
          </IconButton>
        </Box>
      </Box>
      <Divider variant="fullWidth" />
    </Box>
  );
}

export default CartItem;
