import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/productsSlice";
import articlesReducer from "./articles/articlesSlice";
import favoriteCoursesReducer from "./favorite-courses/favoriteCoursesSlice";

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  articles: articlesReducer,
  favoriteCourses: favoriteCoursesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
