import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';
import { rejectedMessage, resolvedMessage } from '../../utils/apiMessage';

export const userOrders = createAsyncThunk(
  'order/userOrders',
  async (email, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/orders/user/${email}`);

      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getOrders = createAsyncThunk(
  'order/getOrders',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/orders`);

      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/orders/${id}`);

      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const deleteUserOrder = createAsyncThunk(
  'order/deleteUserOrder',
  async ({ id, email }, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/orders/${id}`);
      resolvedMessage('Order was successfully deleted');
      thunkAPI.dispatch(userOrders(email));
      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
export const deleteOrder = createAsyncThunk(
  'order/deleteUserOrder',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/orders/${id}`);
      resolvedMessage('Order was successfully deleted');
      thunkAPI.dispatch(getOrders());
      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order, thunkAPI) => {
    try {
      const resp = await instance.post(`/api/orders/`, order);
      resolvedMessage('Order was successfully created');
      thunkAPI.dispatch(userOrders());
      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
export const editeOrder = createAsyncThunk(
  'order/editeOrder',
  async (order, thunkAPI) => {
    console.log(order);
    try {
      const resp = await instance.patch(
        `/api/orders/${order.id}`,
        order.values
      );
      resolvedMessage('Order was successfully Updated');
      // thunkAPI.dispatch(getOrder());
      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
