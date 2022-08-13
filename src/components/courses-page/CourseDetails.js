import { Box, Button, Divider, Typography } from "@mui/material";
import { addItem } from "redux/cart/cartSlice";
import { useDispatch } from "react-redux";
// mui => theme
import { flexAlignCenter, flexBetweenCenter } from "mui/theme/commonStyles";
// icons
import { ClockIcon, DownloadCountIcon, UpdateIcon } from "shared/Icons";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

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
        color: (theme) => theme.palette.primary.contrastText,
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
        <Typography fontFamily="Yekan">{timeFormatter(20, 30, 0)}</Typography>
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
        <Typography fontFamily="Yekan">35486</Typography>
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
        <Typography fontFamily="Yekan">1400/09/09</Typography>
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
        <Button
          variant="contained"
          onClick = {() => dispatch(addItem(course))}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: "white",
            width: "100%",
            height: "48px",
            borderRadius: "8px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: (theme) => theme.palette.secondary.main,
            },
          }}
        >
          اضافه کردن به سبد خرید
        </Button>
      </Box>
    </Box>
  );
}

export default CourseDetails;
