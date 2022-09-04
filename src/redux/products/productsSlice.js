import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://api-eu-west-2.hygraph.com/v2/cl7mdah491t6801upanw21ron/master", {
      query: `
        query {
          courses {
            title
          }
        }
      `
    });
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = "error in fetching products";
      });
  },
});

export const getAllProducts = (state) => state.products.items;
export const getProductById = (state, id) => state.products.items.find((product) => product.id === id);
export const getProductsWithSlice = (state, sliceNumber) => state.products.items.slice(0, sliceNumber);

export default productsSlice.reducer;
