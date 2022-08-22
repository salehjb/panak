import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getAllProducts } from "redux/products/productsSlice";
// components
import CourseBox from "./CourseBox";

function Courses() {
  const courses = useSelector(getAllProducts);

  return (
    <Grid container spacing={3}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <CourseBox course={course} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;
