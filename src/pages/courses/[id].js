import { Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getProductById } from "redux/products/productsSlice";
// components
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import CourseDetails from "components/courses-page/CourseDetails";
import TeacherDetails from "components/courses-page/TeacherDetails";
import MainContent from "components/courses-page/MainContent";
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
      <Navbar />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            height: "100px",
            ...flexAlignCenter,
          }}
        >
          <Container maxWidth="xl">
            <Typography fontSize="25px" sx={{ color: "white" }}>
              {course.title}
            </Typography>
          </Container>
        </Grid>
        <Container maxWidth="xl">
          <Grid container spacing={2} my={2}>
            <Grid item xs={8}>
              <MainContent course={course} />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <CourseDetails course={course} />
              <TeacherDetails course={course} />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </>
  );
}

export default CourseSinglePage;
