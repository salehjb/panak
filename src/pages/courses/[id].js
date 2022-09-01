import { Box, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getProductById } from "redux/products/productsSlice";
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
  const { id } = router.query;

  const course = useSelector((state) => getProductById(state, Number(id)));

  return (
    <>
      {course ? (
        <>
          <Meta title={`پاناک | ${course.title}`} />
          <Layout>
            <HeadTitle title={course.title} />
            <Container maxWidth="xl">
              <Grid container spacing={{ xs: 0, md: 3 }}>
                <Grid item xs={12} md={8}>
                  <MainContent course={course} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box>
                    <CourseDetails course={course} />
                    <TeacherDetails course={course} />
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
