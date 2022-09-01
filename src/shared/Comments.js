import { QuestionAnswerOutlined } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
// components
import Title from "./Title";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Comments() {
  const commentsArray = new Array(10).fill(0);

  return (
    <>
      <Title text="نظرات" icon={<QuestionAnswerOutlined />} />
      <Box
        sx={{
          width: "100%",
          borderRadius: "16px",
          backgroundColor: "white",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
          p: { xs: 2, md: 3 },
        }}
      >
        {commentsArray.map((_, index) => (
          <Box
            key={index}
            sx={{
              mb: index + 1 !== commentsArray.length ? 2 : 0,
              border: "1px solid #C7CED1",
              p: 2,
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                ...flexAlignCenter,
              }}
            >
              <Avatar
                src="http://4kwallpapers.com/images/walls/thumbs_2t/4674.jpg"
                sx={{
                  width: "60px",
                  height: "60px",
                }}
              />
              <Box mr={2} sx={{ ...flexAlignCenter, flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "primary.main",
                  }}
                >
                  مهدی جلیلی
                </Typography>
                <Typography sx={{ color: "primary.contrastText" }}>
                  1400/05/25
                </Typography>
              </Box>
            </Box>
            <Box mt={3}>
              <Typography sx={{ color: "#667177" }}>
                این دوره بسیار عالی بود امیدوارم در آینده آپدیت های بیشتری برای
                این دوره بیاد
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Comments;
