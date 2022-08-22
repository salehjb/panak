import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.cart.push(action.payload);
      }
    },
    removeItem(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
    },
  },
});

export const getAllCarts = (state) => state.cart.cart;

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
