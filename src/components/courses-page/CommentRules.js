import { Box, Typography } from "@mui/material";
import { Done } from '@mui/icons-material';
import { COMMENT_REGISTRATION_RULES } from "datas";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function CommentRules() {
  return (
    <Box>
      {COMMENT_REGISTRATION_RULES.map((rule, index) => (
        <Box key={index} sx={{ ...flexAlignCenter, mb: 1.5 }}>
          <Done sx={{ color: "#49B337" }} />  
          <Typography fontSize="16px">{rule.text}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default CommentRules;
