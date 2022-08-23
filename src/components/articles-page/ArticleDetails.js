import { Avatar, Box, Divider, Typography } from "@mui/material";
import {
  AccessTime,
  CalendarMonthOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
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
          <Typography color="primary" fontSize="18px">
            {article.author.name}
          </Typography>
          <Typography fontSize="14px" sx={{ color: "#667177" }}>
            کاربر وبسایت
          </Typography>
        </Box>
      </Box>
      <Divider variant="fullWidth" sx={{ my: 3 }} />
      <Box sx={{ color: "primary.contrastText" }}>
        <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
          <Box sx={{ ...flexAlignCenter }}>
            <AccessTime />
            <Typography mr={1}>مدت زمان مطالعه</Typography>
          </Box>
          <Typography>15 دقیقه</Typography>
        </Box>
        <Box sx={{ ...flexBetweenCenter, mb: 2 }}>
          <Box sx={{ ...flexAlignCenter }}>
            <CalendarMonthOutlined />
            <Typography mr={1}>تاریخ انتشار</Typography>
          </Box>
          <Typography>1400/05/25</Typography>
        </Box>
        <Box sx={{ ...flexBetweenCenter }}>
          <Box sx={{ ...flexAlignCenter }}>
            <StarBorderOutlined />
            <Typography mr={1}>امتیاز مقاله</Typography>
          </Box>
          <Typography>9/10</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleDetails;
