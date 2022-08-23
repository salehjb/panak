import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllFavoriteCourses } from "redux/favorite-courses/favoriteCoursesSlice";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
import FavoriteCoursesEmpty from "components/dashboard-page/FavoriteCoursesEmpty";
import CourseBox from "components/courses-page/CourseBox";
import Meta from "components/Meta";

function favorites() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  const favoriteCoursesFromStore = useSelector(getAllFavoriteCourses);

  useEffect(() => {
    setFavoriteCourses(favoriteCoursesFromStore);
  }, [favoriteCoursesFromStore]);

  return (
    <>
      <Meta title="داشبورد | علاقه مندی ها" disableAnother />
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
    </>
  );
}

export default favorites;
