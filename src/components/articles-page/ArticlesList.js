import { Grid } from "@mui/material";
// components
import ArticleBox from "./ArticleBox";

function ArticlesList({ articles }) {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <ArticleBox article={article} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ArticlesList;
