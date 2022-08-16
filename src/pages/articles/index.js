import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, getAllArticles } from "redux/articles/articlesSlice";
// components
import Layout from "components/layout/Layout";
import ArticlesList from "components/articles-page/ArticlesList";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function Articles() {
  const [visible, setVisible] = useState(10);

  const dispatch = useDispatch();

  const articles = useSelector(getAllArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  function showMoreArticles() {
    if (visible < articles.length) {
      setVisible((prev) => prev + 10);
    }
  }

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          height: "80px",
          mb: 5,
          ...flexAlignCenter,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{ color: "white", fontSize: "20px", fontWeight: "400" }}
          >
            مقالات
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid
            item
            xs={9}
            sx={{ ...flexAlignCenter, flexDirection: "column" }}
          >
            <ArticlesList articles={articles.slice(0, visible)} />
            <Button
              onClick={showMoreArticles}
              sx={{
                width: "100%",
                height: "60px",
                fontSize: "16px",
                mt: 5,
                opacity: visible < articles.length ? "1" : "0.5",
                pointerEvents: visible < articles.length ? "auto" : "none",
                backgroundColor: (theme) => theme.palette.secondary.main,
                borderRadius: "8px",
                color: (theme) => theme.palette.secondary.contrastText,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.secondary.dark,
                },
              }}
            >
              مقالات بیشتر
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Articles;
