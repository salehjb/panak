// MUI
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
// components
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import CoursesGrouping from "components/courses-page/CoursesGrouping";
import CourseBox from "components/courses-page/CourseBox";
// datas
import { COURSES } from "datas";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function courses() {
  return (
    <>
      <Navbar />
      <Box sx={{ color: "#37474F" }}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "white",
            mb: 6,
            ...flexAlignCenter,
            height: "80px",
          }}
        >
          <Container maxWidth="xl">
            <Typography fontSize="20px" fontWeight="300">
              دوره های آموزشی
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Grid container columnSpacing={3}>
            <Grid item xs={3}>
              <InputBase
                fullWidth
                placeholder="عنوان مد نظر را جستجو کنید..."
                sx={{
                  border: "1px solid #CFD8DC",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  height: "48px",
                  pr: 2,
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                }
              />
              <CoursesGrouping />
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={3}>
                {COURSES.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <CourseBox {...item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default courses;
