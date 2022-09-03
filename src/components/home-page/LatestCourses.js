import Link from "next/link";
import { Box, Button, Container, Grid, Link as MuiLink } from "@mui/material";
import { useSelector } from "react-redux";
import { getProductsWithSlice } from "redux/products/productsSlice";
// components
import HomeTitle from "./HomeTitle";
import CourseBox from "components/courses-page/CourseBox";
// mui => theme
import { flexCenter, flexJustifyCenter } from "mui/theme/commonStyles";

function LatestCourses() {
  const courses = useSelector((state) => getProductsWithSlice(state, 4));

  return (
    <Grid container mt={9}>
      <Container maxWidth="xl">
        <Grid item xs={12}>
          <HomeTitle text="جدید ترین دوره ها" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ position: "relative", ...flexCenter, mt: 5, zIndex: 10 }}
        >
          <Grid container spacing={2}>
            {courses.map((course) => (
              <Grid item xs={12} md={3} key={course.id}>
                <CourseBox course={course} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Grid item xs={12}>
        <Box
          sx={{
            position: "relative",
            top: "-60px",
            backgroundColor: "primary.main",
            height: "200px",
            zIndex: 5,
            ...flexJustifyCenter,
            alignItems: "flex-end",
          }}
        >
          <Link href="/courses">
            <MuiLink sx={{ mb: 3 }}>
              <Button variant="contained" color="secondary" fullWidth>
                مشاهده همه دوره ها
              </Button>
            </MuiLink>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LatestCourses;
