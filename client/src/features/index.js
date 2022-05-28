import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product/productSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
});
