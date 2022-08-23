import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [
    {title: "دوره متخصص ری اکت", date: "1400/05/1", time: "11:33"},
    {title: "دوره متخصص ری اکت", date: "1400/05/1", time: "11:33"},
    {title: "دوره متخصص ری اکت", date: "1400/05/1", time: "11:33"},
  ],
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.purchases.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.purchases.push(action.payload);
      }
    },
    removeItem(state, action) {
      const itemIndex = state.purchases.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.purchases.splice(itemIndex, 1);
      }
    },
  },
});

export const getAllPurchases = (state) => state.purchases.purchases;

export const { addItem, removeItem } = purchasesSlice.actions

export default purchasesSlice.reducer;
