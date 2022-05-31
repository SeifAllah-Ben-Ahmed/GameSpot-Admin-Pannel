import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product/productSlice';
import authSlice from './auth/authSlice';
import userSlice from './user/userSlice';
import orderSlice from './order/orderSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
    user: userSlice,
    order: orderSlice,
  },
});
