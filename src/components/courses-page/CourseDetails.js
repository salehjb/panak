import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  Typography,
  Link as MuiLink,
  Button,
} from "@mui/material";
import { TaskAltOutlined } from "@mui/icons-material";
import { addItem, getAllCarts } from "redux/cart/cartSlice";
import { addFavoriteCourse } from "redux/favorite-courses/favoriteCoursesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
// mui => theme
import { flexAlignCenter, flexBetweenCenter } from "mui/theme/commonStyles";
// utils
import { priceFormatter, handleSnack } from "utils/functions";

function CourseDetails({ course }) {
  const dispatch = useDispatch();

  const cart = useSelector(getAllCarts);

  const courseExistInCart =
    cart.findIndex((item) => item.id === course.id) !== -1;

  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "24px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        p: 3,
        color: "primary.light",
      }}
    >
      <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
        <Box sx={{ ...flexAlignCenter }}>
          <img
            src="/icons/clock-icon-course-single-page.svg"
            alt="clock icon"
          />
          <Typography
            sx={{
              fontSize: "15px",
              mr: 1.5,
            }}
          >
            مدت دوره
          </Typography>
        </Box>
        <Typography>{course.duration} ساعت</Typography>
      </Box>
      <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
        <Box sx={{ ...flexAlignCenter }}>
          <img
            src="/icons/document-download-icon.svg"
            alt="document download icon"
          />
          <Typography
            sx={{
              fontSize: "15px",
              mr: 1.5,
            }}
          >
            تعداد دانلود ها
          </Typography>
        </Box>
        <Typography>35486</Typography>
      </Box>
      <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
        <Box sx={{ ...flexAlignCenter }}>
          <img src="/icons/update-icon.svg" alt="update icon" />
          <Typography
            sx={{
              fontSize: "15px",
              mr: 1.5,
            }}
          >
            آخرین به روز رسانی
          </Typography>
        </Box>
        <Typography>1400/09/09</Typography>
      </Box>
      <Divider variant="fullWidth" />
      <Box
        sx={{
          width: "100%",
          height: "62px",
          backgroundColor: "#F7F7F8",
          my: 2,
          border: "1px dashed #CFD8DC",
          borderRadius: "12px",
          ...flexBetweenCenter,
          px: 2,
        }}
      >
        <Typography fontSize="15px">قیمت</Typography>
        <Typography fontSize="17px" fontWeight="400">
          {priceFormatter(course.price)} تومان
        </Typography>
      </Box>
      <Box>
        {courseExistInCart ? (
          <Link href="/shopping-cart">
            <MuiLink>
              <Button variant="contained" color="success" fullWidth>
                <TaskAltOutlined />
                <Typography sx={{ mr: 1 }}>مشاهده سبد خرید</Typography>
              </Button>
            </MuiLink>
          </Link>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(addItem(course));
              handleSnack(
                "success",
                enqueueSnackbar,
                `${course.title} به سبد خرید اضافه شد`
              );
            }}
            fullWidth
          >
            اضافه کردن به سبد خرید
          </Button>
        )}
        <Box sx={{ mt: 1 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => dispatch(addFavoriteCourse(course))}
            fullWidth
          >
            افزودن به علاقه مندی ها
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseDetails;
