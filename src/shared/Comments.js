import { QuestionAnswerOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
// components
import Comment from "./Comment";
import Title from "./Title";

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
          p: 3,
        }}
      >
        {commentsArray.map((_, index) => (
          <Comment key={index} />
        ))}
      </Box>
    </>
  );
}

export default Comments;
