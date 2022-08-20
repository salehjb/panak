import { Box, Link as MuiLink, Typography } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getArticlesWithSlice } from "redux/articles/articlesSlice";
// mui => theme
import { dcFlex, flexAlignCenter } from "mui/theme/commonStyles";

function NewestArticles() {
  const articles = useSelector((state) => getArticlesWithSlice(state, 5));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        width: "100%",
        borderRadius: "16px",
        mt: 2,
        py: 2,
        px: 2,
        ...dcFlex,
      }}
    >
      <Typography color="primary" fontSize="20px" fontWeight="400" mb={3}>جدید ترین مقالات</Typography>  
      {articles.map((article, index) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <MuiLink
            sx={{
              borderBottom: index + 1 < articles.length && "1px solid #CFD8DC",
              mb: index + 1 < articles.length && 2,
              pb: index + 1 < articles.length && 2,
              ...flexAlignCenter,
            }}
          >
            <img
              src={article.image}
              alt="article image"
              width="100px"
              style={{ borderRadius: "16px" }}
            />
            <Typography mr={1} fontSize="16px">{article.title}</Typography>
          </MuiLink>
        </Link>
      ))}
    </Box>
  );
}

export default NewestArticles;
