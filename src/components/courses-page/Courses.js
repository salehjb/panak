import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "redux/products/productsSlice";
// components
import CourseBox from "./CourseBox";

function Courses() {
  const dispatch = useDispatch();
  
  const products = useSelector(getAllProducts);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={4} key={product.id}>
          <CourseBox product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;
