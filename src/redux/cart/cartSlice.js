import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success(`${action.payload.title} به سبد خرید اضافه شد`, {
        position: "top-right",
        className: "my-toast",
      });
    },
    removeItem(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
      }
      toast.error(`${action.payload.title} از سبد خرید حذف شد`, {
        position: "top-right",
        className: "my-toast",
      });
    },
  },
});

export const getAllCarts = (state) => state.cart.cart;

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
