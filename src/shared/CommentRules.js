import { Box, Typography } from "@mui/material";
import { AddCommentOutlined, Done } from "@mui/icons-material";
import { COMMENT_REGISTRATION_RULES } from "datas";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";
// components
import Title from "./Title";

function CommentRules() {
  return (
    <>
      <Title text="ثبت دیدگاه" icon={<AddCommentOutlined />} />
      <Box sx={{ color: (theme) => theme.palette.primary.main }}>
        {COMMENT_REGISTRATION_RULES.map((rule, index) => (
          <Box key={index} sx={{ ...flexAlignCenter, mb: 1.5 }}>
            <Done sx={{ color: "#49B337" }} />
            <Typography fontSize="16px">{rule.text}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default CommentRules;
