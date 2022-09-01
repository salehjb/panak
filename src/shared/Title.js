import { Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Title({ text, icon }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ ...flexAlignCenter }}>
        <Box
          sx={{
            fontSize: "1.5rem",
            ...flexAlignCenter,
            ml: 1,
            color: "primary.main",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "primary.main",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box sx={{ mt: 0.5, mb: 2 }}>
        <Box
          sx={{
            backgroundColor: "secondary.main",
            width: "200px",
            height: "4px",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "#CFD8DC",
            width: "100%",
            height: "1px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Title;
