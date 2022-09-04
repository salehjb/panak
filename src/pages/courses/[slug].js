import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { getProductById } from "redux/products/productsSlice";
import { GET_COURSE_DETAILS } from "graphql/queries";
// components
import CourseDetails from "components/courses-page/CourseDetails";
import TeacherDetails from "components/courses-page/TeacherDetails";
import MainContent from "components/courses-page/MainContent";
import Layout from "components/layout/Layout";
import Meta from "components/Meta";
import HeadTitle from "shared/HeadTitle";
import Loading from "shared/Loading";

function CourseSinglePage() {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, data, errors } = useQuery(GET_COURSE_DETAILS, {
    variables: { slug }
  });

  return (
    <>
      {!loading ? (
        <>
          <Meta title={`پاناک | ${data.course.title}`} />
          <Layout>
            <HeadTitle title={data.course.title} />
            <Container maxWidth="xl">
              <Grid container spacing={{ xs: 0, md: 3 }}>
                <Grid item xs={12} md={8}>
                  <MainContent course={data.course} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <CourseDetails course={data.course} />
                    <TeacherDetails course={data.course} />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Layout>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CourseSinglePage;
