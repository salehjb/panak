import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "redux/products/productsSlice";
// components
import CourseBox from "./CourseBox";

function Courses() {
  const products = useSelector(getAllProducts);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <CourseBox product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;
