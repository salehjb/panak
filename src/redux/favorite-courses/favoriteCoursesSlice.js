import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setToLocalStorage } from "utils/functions";

const initialState = {
  favoriteCourses: getFromLocalStorage("favorite_courses")
    ? JSON.parse(getFromLocalStorage("favorite_courses"))
    : [],
};

const favoriteCoursesSlice = createSlice({
  name: "favoriteCourses",
  initialState,
  reducers: {
    addFavoriteCourse(state, action) {
      const itemIndex = state.favoriteCourses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.favoriteCourses.push(action.payload);
      }
      setToLocalStorage(
        "favorite_courses",
        JSON.stringify(state.favoriteCourses)
      );
    },
    removeFavoriteCourse(state, action) {
      const itemIndex = state.favoriteCourses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.favoriteCourses.splice(itemIndex, 1);
      }
      setToLocalStorage(
        "favorite_courses",
        JSON.stringify(state.favoriteCourses)
      );
    },
  },
});

export const getAllFavoriteCourses = (state) =>
  state.favoriteCourses.favoriteCourses;

export const { addFavoriteCourse, removeFavoriteCourse } =
  favoriteCoursesSlice.actions;

export default favoriteCoursesSlice.reducer;
