import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cart.findIndex(
        (itemInState) => itemInState.id === item.id
      );
      if (itemIndex === -1) {
        state.cart.push(item);
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cart.findIndex(
        (itemInState) => itemInState.id === item.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity -= item.quantity;
        if (state.cart[itemIndex].quantity === 0) {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getAllCarts = (state) => state.cart.cart;

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
