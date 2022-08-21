import { Box, Divider, Typography } from "@mui/material";
import { addItem } from "redux/cart/cartSlice";
import { addFavoriteCourse } from "redux/favorite-courses/favoriteCoursesSlice";
import { useDispatch } from "react-redux";
// mui => theme
import { flexAlignCenter, flexBetweenCenter } from "mui/theme/commonStyles";
// icons
import { ClockIcon, DownloadCountIcon, UpdateIcon } from "shared/Icons";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";
// components
import { ContainedButton, OutlinedButton } from "shared/Button";

function CourseDetails({ course }) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "24px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        p: 3,
        color: "primary.contrastText",
      }}
    >
      <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
        <Box sx={{ ...flexAlignCenter }}>
          <ClockIcon />
          <Typography
            sx={{
              fontSize: "15px",
              mr: 1.5,
            }}
          >
            مدت دوره
          </Typography>
        </Box>
        <Typography>{timeFormatter(20, 30, 0)}</Typography>
      </Box>
      <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
        <Box sx={{ ...flexAlignCenter }}>
          <DownloadCountIcon />
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
          <UpdateIcon />
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
        <ContainedButton onClick={() => dispatch(addItem(course))}>
          اضافه کردن به سبد خرید
        </ContainedButton>
        <OutlinedButton margin="0.5rem 0 0 0" onClick={() => dispatch(addFavoriteCourse(course))}>
          افزودن به علاقه مندی ها
        </OutlinedButton>
      </Box>
    </Box>
  );
}

export default CourseDetails;
