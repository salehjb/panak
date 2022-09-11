import Link from "next/link";
import { Box, IconButton, Typography, Link as MuiLink } from "@mui/material";
import { ArrowCircleLeftOutlined, Close } from "@mui/icons-material";
import { removeFavoriteCourse } from "redux/favorite-courses/favoriteCoursesSlice";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function CourseBox({ course, isDeleteIcon }) {
  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.09)",
        borderRadius: "12px",
        backgroundColor: "white",
        p: 2,
        ...flexAlignCenter,
      }}
    >
      <Link href={`/courses/${course.id}`}>
        <MuiLink sx={{ width: "40%", height: "150px" }}>
          <img
            src={course.image.url}
            alt="course image"
            width="100%"
            height="100%"
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
          {isDeleteIcon && (
            <IconButton onClick={() => dispatch(removeFavoriteCourse(course))}>
              <Close />
            </IconButton>
          )}
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1 }}>
          <img src="/icons/profile-icon.svg" alt="profile icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {course.teacher.name}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1 }}>
          <img src="/icons/clock-icon.svg" alt="clock icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {timeFormatter(15, 33, 0)}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, justifyContent: "space-between", mt: 2 }}>
          <Typography
            sx={{ fontSize: "17px", fontWeight: "400" }}
            color="primary"
          >
            {priceFormatter(course.price)} تومان
          </Typography>
          <Link href={`/courses/${course.slug}`}>
            <MuiLink sx={{ color: "secondary.main", ...flexAlignCenter }}>
              <Typography sx={{ ml: 1, fontWeight: "400", fontSize: "15px", display: { xs: "none", md: "flex" } }}>
                مشاهده دوره
              </Typography>
              <ArrowCircleLeftOutlined />
            </MuiLink>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseBox;