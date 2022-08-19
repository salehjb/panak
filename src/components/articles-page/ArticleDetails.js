import { Avatar, Box, Divider, Typography } from "@mui/material";
import { ClockIcon } from "shared/Icons";
// mui => theme
import {
  dcFlex,
  flexAlignCenter,
  flexBetweenCenter,
  flexCenter,
} from "mui/theme/commonStyles";

function ArticleDetails({ article }) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        borderRadius: "16px",
        p: 2,
      }}
    >
      <Box sx={{ ...flexCenter }}>
        <Avatar
          src={article.author.image}
          sx={{ width: "60px", height: "60px" }}
        />
        <Box sx={{ mr: 1, ...dcFlex, alignItems: "center" }}>
          <Typography fontSize="18px">{article.author.name}</Typography>
          <Typography fontSize="14px" sx={{ color: "#667177" }}>
            کاربر وبسایت
          </Typography>
        </Box>
      </Box>
      <Divider variant="fullWidth" sx={{ my: 3 }} />
      <Box sx={{ color: (theme) => theme.palette.primary.contrastText }}>
        <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
          <Box sx={{ ...flexAlignCenter }}>
            <ClockIcon />
            <Typography>مدت زمان مطالعه</Typography>
          </Box>
          <Typography>15 دقیقه</Typography>
        </Box>
        <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
          <Box sx={{ ...flexAlignCenter }}>
            <ClockIcon />
            <Typography>تاریخ انتشار</Typography>
          </Box>
          <Typography>1400/05/25</Typography>
        </Box>
        <Box sx={{ ...flexBetweenCenter }}>
          <Box sx={{ ...flexAlignCenter }}>
            <ClockIcon />
            <Typography>امتیاز مقاله</Typography>
          </Box>
          <Typography>9/10</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleDetails;
