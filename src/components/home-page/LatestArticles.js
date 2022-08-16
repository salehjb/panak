import { Box, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  getArticlesWithSlice,
} from "redux/articles/articlesSlice";
// components
import ArticleBox from "components/articles-page/ArticleBox";
import HomeTitle from "./HomeTitle";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function LatestArticles() {
  const dispatch = useDispatch();

  const articles = useSelector((state) => getArticlesWithSlice(state, 4));

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  console.log(articles);

  return (
    <Grid container mt={9}>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <HomeTitle text="آخرین مقالات" />
        </Grid>
        <Grid item xs={12} sx={{ ...flexCenter, mt: 5 }}>
          <Grid container spacing={2}>
            {articles.map((article) => (
              <Grid item xs={3} key={article.id}>
                <ArticleBox article={article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default LatestArticles;
