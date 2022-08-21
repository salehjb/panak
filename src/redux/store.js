import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import articlesReducer from "./articles/articlesSlice";
import favoriteCoursesReducer from "./favorite-courses/favoriteCoursesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    articles: articlesReducer,
    favoriteCourses: favoriteCoursesReducer,
  },
});

export default store;
