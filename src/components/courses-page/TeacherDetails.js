import { Avatar, Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter, flexJustifyCenter } from "mui/theme/commonStyles";
// components
import Description from "shared/Description";

function TeacherDetails({ course }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        mt: 3,
        p: 3,
        ...flexAlignCenter,
        flexDirection: "column",
      }}
    >
      <Box>
        <Avatar
          src={course.teacher.image.url}
          sx={{ width: "114px", height: "114px" }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "primary.main",
            textAlign: "center",
            mt: 1,
          }}
        >
          {course.teacher.name}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Description>{course.teacher.description}</Description>
      </Box>
    </Box>
  );
}

export default TeacherDetails;
