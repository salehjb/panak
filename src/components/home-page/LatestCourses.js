import { useEffect } from "react";
import Link from "next/link";
import { Box, Container, Grid, Link as MuiLink } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getProductsWithSlice,
} from "redux/products/productsSlice";
// components
import HomeTitle from "./HomeTitle";
import CourseBox from "components/courses-page/CourseBox";
// mui => theme
import { flexCenter, flexJustifyCenter } from "mui/theme/commonStyles";

function LatestCourses() {
  const dispatch = useDispatch();

  const products = useSelector((state) => getProductsWithSlice(state, 4));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
            {products.map((product) => (
              <Grid item xs={3} key={product.id}>
                <CourseBox product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          top: "-45px",
          backgroundColor: "primary.main",
          height: "200px",
          zIndex: 5,
          ...flexJustifyCenter,
          alignItems: "flex-end",
        }}
      >
        <Link href="/courses">
          <MuiLink
            sx={{
              ...flexCenter,
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "48px",
              borderRadius: "8px",
              cursor: "pointer",
              color: "white",
              mb: 5,
              cursor: "pointer",
            }}
          >
            مشاهده همه دوره ها
          </MuiLink>
        </Link>
      </Grid>
    </Grid>
  );
}

export default LatestCourses;
