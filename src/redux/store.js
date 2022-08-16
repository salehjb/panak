import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import articlesReducer from "./articles/articlesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    articles: articlesReducer,
  },
});

export default store;
