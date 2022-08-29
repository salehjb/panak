import { useState } from "react";
import { Clear } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { removeItem } from "redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
// utils
import { priceFormatter, handleSnack } from "utils/functions";

function CartItem({ course }) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  return (
    <>
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
              src={course.image}
              alt="course image"
              width="44px"
              height="44px"
              style={{ borderRadius: "8px" }}
            />
            <Box mr={2}>
              <Typography fontSize="16px" fontWeight="400">
                {course.title}
              </Typography>
              <Typography fontSize="14px">{course.teacher}</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "50%" }}>{priceFormatter(course.price)}</Box>
          <Box
            sx={{
              width: "10%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => {
                dispatch(removeItem(course));
                handleSnack("error", enqueueSnackbar, `${course.title} از سبد خرید حذف شد`);
              }}
            >
              <Clear />
            </IconButton>
          </Box>
        </Box>
        <Divider variant="fullWidth" />
      </Box>
    </>
  );
}

export default CartItem;
