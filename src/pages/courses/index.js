import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "redux/products/productsSlice";
// components
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import CoursesGrouping from "components/courses-page/CoursesGrouping";
import CourseBox from "components/courses-page/CourseBox";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function courses() {
  const products = useSelector(getAllProducts);

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
                {products.map((product) => (
                  <Grid item xs={4} key={product.id}>
                    <CourseBox product={product} />
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