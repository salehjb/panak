import { Avatar, Box, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Comment() {
  return (
    <Box sx={{ mb: 2, border: "1px solid #C7CED1", p: 2, borderRadius: "8px" }}>
      <Box
        sx={{
          ...flexAlignCenter,
          color: (theme) => theme.palette.primary.main,
        }}
      >
        <Avatar
          src="http://4kwallpapers.com/images/walls/thumbs_2t/4674.jpg"
          sx={{
            width: "60px",
            height: "60px",
          }}
        />
        <Box mr={3} sx={{ ...flexAlignCenter }}>
          <Typography sx={{ fontSize: "16px" }}>مهدی جلیلی</Typography>
          <Typography
            sx={{
              backgroundColor: "#49B337",
              color: "white",
              p: 0.5,
              mr: 2,
              borderRadius: "4px",
            }}
          >
            دانشجوی دوره
          </Typography>
          <Typography sx={{ mr: 2 }}>1400/05/25</Typography>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography sx={{ color: "#667177" }}>
          این دوره بسیار عالی بود امیدوارم در آینده آپدیت های بیشتری برای این
          دوره بیاد
        </Typography>
      </Box>
    </Box>
  );
}

export default Comment;
