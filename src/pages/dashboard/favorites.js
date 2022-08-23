import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllFavoriteCourses } from "redux/favorite-courses/favoriteCoursesSlice";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
import FavoriteCoursesEmpty from "components/dashboard-page/FavoriteCoursesEmpty";
import CourseBox from "components/courses-page/CourseBox";

function favorites() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const favoriteCoursesFromStore = useSelector(getAllFavoriteCourses);

  useEffect(() => {
    setFavoriteCourses(favoriteCoursesFromStore);
  }, [favoriteCoursesFromStore]);

  console.log(favoriteCourses);

  return (
    <DashboardLayout>
      {favoriteCourses.length > 0 ? (
        <Grid container spacing={3}>
          {favoriteCourses?.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <CourseBox course={course} isDeleteIcon />
            </Grid>
          ))}
        </Grid>
      ) : (
        <FavoriteCoursesEmpty />
      )}
    </DashboardLayout>
  );
}

export default favorites;
