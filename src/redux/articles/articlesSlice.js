import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "success";
        const loadedArticles = action.payload.map((article) => {
          article.title = "سفر به دوران قبل از تکنولوژی";
          article.image =
            "https://api.time.com/wp-content/uploads/2016/05/rts8haa.jpg?quality=85&w=3500";
          article.author = { name: "صالح جلیلی", image: "https://i0.wp.com/short-biography.com/wp-content/uploads/emilia-clarke/Emilia-Clarke.jpg?fit=1024%2C1024&ssl=1" };
          return article;
        });
        state.articles = loadedArticles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "error";
        state.error = "error in fetching articles";
      });
  },
});

export const getAllArticles = (state) => state.articles.articles;
export const getArticleById = (state, id) => state.articles.articles.find((article) => article.id === id);
export const getArticlesWithSlice = (state, sliceNumber) => state.articles.articles.slice(0, sliceNumber);

export default articlesSlice.reducer;
