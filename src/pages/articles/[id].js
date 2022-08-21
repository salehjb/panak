import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getArticleById } from "redux/articles/articlesSlice";
import ArticleDetails from "components/articles-page/ArticleDetails";
// components
import Layout from "components/layout/Layout";
// mui => theme
import {
  flexAlignCenter,
  flexCenter,
  flexJustifyCenter,
  flexBetweenCenter,
  dcFlex,
} from "mui/theme/commonStyles";
import Comments from "shared/Comments";
import CommentForm from "shared/CommentForm";
import CommentRules from "shared/CommentRules";
import MainContent from "components/articles-page/MainContent";
import NewestArticles from "components/articles-page/NewestArticles";

function ArticleSinglePage() {
  const router = useRouter();
  const { id } = router.query;

  const article = useSelector((state) => getArticleById(state, Number(id)));

  if (!article) {
    return <div style={{ fontSize: "2rem" }}>Loading...</div>;
  }

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "100px",
          ...flexAlignCenter,
        }}
      >
        <Container maxWidth="xl">
          <Typography fontSize="25px" sx={{ color: "white" }}>
            {article.title}
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Grid container mt={3} columnSpacing={1}>
          <Grid item xs={9}>
            <MainContent article={article} />
            <Box mt={7}>
              <Comments />
            </Box>
            <Box mt={7}>
              <CommentRules />
            </Box>
            <Box mt={7}>
              <CommentForm />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <ArticleDetails article={article} />
            <NewestArticles />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default ArticleSinglePage;
