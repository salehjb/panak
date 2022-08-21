import Link from "next/link";
import { Box, IconButton, Typography, Link as MuiLink } from "@mui/material";
import { Close } from "@mui/icons-material";
import { addItem } from "redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { removeFavoriteCourse } from "redux/favorite-courses/favoriteCoursesSlice";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// icons
import { ProfileIcon, ClockIcon, AddProductIcon } from "shared/Icons";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function FavoriteCourseBox({ course }) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.09)",
        borderRadius: "12px",
        p: 2,
        ...flexAlignCenter,
      }}
    >
      <Link href={`/courses/${course.id}`}>
        <MuiLink sx={{ width: "40%" }}>
          <img
            src={course.image}
            alt="course image"
            width="100%"
            height="150px"
            style={{ borderRadius: "12px" }}
          />
        </MuiLink>
      </Link>
      <Box mr={2} sx={{ width: "60%" }}>
        <Box sx={{ ...flexAlignCenter, justifyContent: "space-between" }}>
          <Link href={`/courses/${course.id}`}>
            <MuiLink>
              <Typography color="primary" fontSize="16px" fontWeight="400">
                {course.title}
              </Typography>
            </MuiLink>
          </Link>
          <IconButton onClick={() => dispatch(removeFavoriteCourse(course))}>
            <Close />
          </IconButton>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1 }}>
          <ProfileIcon />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {course.teacher}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1 }}>
          <ClockIcon />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {timeFormatter(15, 33, 0)}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, justifyContent: "space-between" }}>
          <Typography
            sx={{ fontSize: "17px", fontWeight: "400", mt: 1 }}
            color="primary"
          >
            {priceFormatter(course.price)} تومان
          </Typography>
          <IconButton
            onClick={() => dispatch(addItem(course))}
            sx={{
              width: "35px",
              height: "35px",
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            <AddProductIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default FavoriteCourseBox;
