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
    const response = await axios.get("https://fakestoreapi.com/products");
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
        const loadedProducts = action.payload.map((product) => {
          product.title = "دوره متخصص ری اکت";
          product.teacher = "صالح جلیلی";
          product.price = 10000000;
          product.image =
            "https://solvers.fr/wp-content/uploads/2019/06/8-astuces-pour-ame%CC%81liorer-les-performances-des-applications-React.png";
          return product;
        });
        state.items = loadedProducts;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = "error in fetching products";
      });
  },
});

export const getAllProducts = (state) => state.products.items;
export const getProductById = (state, id) => state.products.items.find((product) => product.id === id);

export default productsSlice.reducer;
