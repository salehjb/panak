import { Delete } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { removeItem } from "redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
// utils
import { priceFormatter, handleSnack } from "utils/functions";
import { flexCenter } from "mui/theme/commonStyles";

function CartItem({ course }) {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box
      sx={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "", md: "center" },
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={course.image}
          alt="course image"
          width="70px"
          height="55px"
          style={{ borderRadius: "8px" }}
        />
        <Box mr={2}>
          <Typography fontSize="16px" fontWeight="400">
            {course.title}
          </Typography>
          <Typography fontSize="14px">{course.teacher}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ mr: { xs: 0, md: 5 } }}>
          {priceFormatter(course.price)} تومان
        </Box>
        <Box
          sx={{
            p: 0.5,
            border: "2px solid red",
            borderRadius: "50%",
            ...flexCenter,
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(removeItem(course));
            handleSnack(
              "error",
              enqueueSnackbar,
              `${course.title} از سبد خرید حذف شد`
            );
          }}
        >
          <Delete sx={{ color: "error.main" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default CartItem;
