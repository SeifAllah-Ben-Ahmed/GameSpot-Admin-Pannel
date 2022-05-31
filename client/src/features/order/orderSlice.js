import { getOrder, getOrders, userOrders } from './orderApi';

const { createSlice } = require('@reduxjs/toolkit');

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isLoading: false,
    orders: [],
    userOrders: [],
    order: {},
  },

  extraReducers: {
    [userOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.orders = [];
    },
    [userOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.data.orders;
      state.status = action.payload.status;
    },
    [userOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    [getOrders.pending]: (state, action) => {
      state.isLoading = true;
      state.orders = [];
    },
    [getOrders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload.data.orders;
      state.status = action.payload.status;
    },
    [getOrders.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    [getOrder.pending]: (state, action) => {
      state.isLoading = true;
      state.order = {};
    },
    [getOrder.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.order = action.payload.data.order;
      state.status = action.payload.status;
    },
    [getOrder.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
  },
});

export default orderSlice.reducer;
