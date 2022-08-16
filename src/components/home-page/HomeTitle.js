import { Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function HomeTitle({ text }) {
  return (
    <Box sx={{ ...flexAlignCenter, flexDirection: "column" }}>
      <Box
        sx={{
          mb: 1,
          backgroundColor: (theme) => theme.palette.secondary.main,
          width: "78px",
          height: "4px",
          borderRadius: "8px",
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "400",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default HomeTitle;
