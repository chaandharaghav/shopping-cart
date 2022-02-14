import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    isCartEmpty: (state) => {
      return state.cart.length === 0;
    },
    isItemInCart: (state, action) => {
      return state.cart.find((item) => item.id === action.payload)
        ? true
        : false;
    },
    addToCart: (state, action) => {
      const id = parseInt(action.payload);

      if (cartSlice.caseReducers.isCartEmpty(state)) {
        state.cart.push({ id, count: 1 });
      } else {
        if (
          cartSlice.caseReducers.isItemInCart(state, {
            name: 'isItemInCart',
            payload: id,
          })
        ) {
          state.cart.find((item) => item.id === id).count++;
        } else {
          state.cart.push({ id, count: 1 });
        }
      }
    },
  },
});

export const { isCartEmpty, isItemInCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
