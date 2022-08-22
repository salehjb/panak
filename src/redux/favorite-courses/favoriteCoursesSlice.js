import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCourses: [],
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
    },
    removeFavoriteCourse(state, action) {
      const itemIndex = state.favoriteCourses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.favoriteCourses.splice(itemIndex, 1);
      }
    },
  },
});

export const getAllFavoriteCourses = (state) =>
  state.favoriteCourses.favoriteCourses;

export const { addFavoriteCourse, removeFavoriteCourse } =
  favoriteCoursesSlice.actions;

export default favoriteCoursesSlice.reducer;
