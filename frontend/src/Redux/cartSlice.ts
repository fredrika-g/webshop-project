import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductSummaryType } from '../Models/ProductSummaryType';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [] as ProductSummaryType[] },
  reducers: {
    setCart: (state, action: PayloadAction<ProductSummaryType[]>) => {
      state.cart = [...action.payload];
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
