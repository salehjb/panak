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
// mui => theme
import {
  flexAlignCenter,
  flexBetween,
  flexBetweenCenter,
} from "mui/theme/commonStyles";

function CourseSinglePage() {
  const router = useRouter();
  const { id } = router.query;

  const course = useSelector((state) => getProductById(state, Number(id)));

  if (!course) {
    return <div style={{ fontSize: "2rem" }}>Loading...</div>;
  }

  return (
    <>
      <Meta title={`پاناک | ${course.title}`} />
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
              {course.title}
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Grid container spacing={3} mt={1}>
            <Grid item xs={8}>
              <MainContent course={course} />
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <CourseDetails course={course} />
                <TeacherDetails course={course} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default CourseSinglePage;
