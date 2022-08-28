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
    <Grid container spacing={{ xs: 0, md: 2 }}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} mt={{ xs: index !== 0 && 2, md: 0 }} key={course.id}>
          <CourseBox course={course} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Courses;
