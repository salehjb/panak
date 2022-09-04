import Link from "next/link";
import {
  IconButton,
  Typography,
  Link as MuiLink,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// utils
import { priceFormatter, timeFormatter } from "utils/functions";

function CourseBox({ course }) {
  return (
    <Card
      sx={{
        borderRadius: "15px",
        color: "primary.light",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        src={course.image.url}
        sx={{ borderRadius: "15px", objectFit: "fill" }}
      />
      <CardContent>
        <Typography sx={{ fontSize: "17px", fontWeight: "400" }}>
          دوره {course.title}
        </Typography>
        <Box sx={{ ...flexAlignCenter, mt: 2 }}>
          <img src="/icons/profile-icon.svg" alt="profile icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {course.teacher.name}
          </Typography>
        </Box>
        <Box sx={{ ...flexAlignCenter, mt: 1.5 }}>
          <img src="/icons/clock-icon.svg" alt="clock icon" />
          <Typography sx={{ fontSize: "15px", mr: 1 }}>
            {timeFormatter(15, 33, 0)}
          </Typography>
        </Box>
        <Box
          sx={{ ...flexAlignCenter, justifyContent: "space-between", mt: 2 }}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: "400", mr: 1 }}>
            {priceFormatter(course.price)} تومان
          </Typography>
          <Link href={`/courses/${course.slug}`}>
            <MuiLink sx={{ color: "secondary.main", ...flexAlignCenter }}>
              <Typography sx={{ ml: 1, fontWeight: "400", fontSize: "15px" }}>
                مشاهده دوره
              </Typography>
              <ArrowCircleLeftOutlined />
            </MuiLink>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CourseBox;
