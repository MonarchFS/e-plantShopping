import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array {"item": plantItem, "quantity":10}
  },
  reducers: {
    addItem: (state, action) => {
      const plantItem = action.payload;
      const existingItem = state.items.find((item) => item.item.name === plantItem.name);
      if (existingItem) {
        existingItem["quantity"] += 1;
      }
      else {
        state.items.push({"item": plantItem, "quantity": 1});
      }
    },
    removeItem: (state, action) => {
      const plantItem = action.payload;
      state.items = state.items.filter((item) => item.item.name != plantItem.name);
    },
    updateQuantity: (state, action) => {
      const {plantItem, amount} = action.payload;
      const existingItem = state.items.find((item) => item.item.name === plantItem.name);
      if (existingItem) {
        existingItem["quantity"] = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
