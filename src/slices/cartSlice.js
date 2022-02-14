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
    cartItemInc: (state, action) => {
      state.cart.find((item) => item.id === action.payload).count++;
    },
    cartItemDec: (state, action) => {
      let item = state.cart.find((item) => item.id === action.payload);
      if (item.count > 1) item.count--;
    },
    cartItemCountChange: (state, action) => {
      let item = state.cart.find((item) => item.id === action.payload.id);
      if (item.count) item.count = parseInt(action.payload.count);
      else item.count = 1;
    },
    cartItemDelete: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === parseInt(action.payload),
      );
      state.cart.splice(itemIndex, 1);
    },
  },
});

export const {
  isCartEmpty,
  isItemInCart,
  addToCart,
  cartItemInc,
  cartItemDec,
  cartItemCountChange,
  cartItemDelete,
} = cartSlice.actions;

export default cartSlice.reducer;