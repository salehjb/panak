// MUI
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  useTheme,
} from "@mui/material";
import { Search } from "@mui/icons-material";
// components
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CoursesGrouping from "../components/CoursesGrouping";
import CourseBox from "../components/CourseBox";
// datas
import { COURSES, SORT_COURSES } from "../datas";

function courses() {
  // styles
  const theme = useTheme();
  const styles = {
    header: {
      backgroundColor: "#0E363F",
      color: "white",
      height: "80px",
      display: "flex",
      alignItems: "center",
      marginBottom: "3rem"
    },
    searchInput: {
      border: "1px solid #CFD8DC",
      borderRadius: "8px",
      backgroundColor: "white",
      height: "48px",
      pr: 2,
    },
  };

  return (
    <>
      <Navbar />
      <Box sx={{ color: "#37474F" }}>
        <Box sx={styles.header}>
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
                sx={styles.searchInput}
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
