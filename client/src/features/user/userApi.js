import { createAsyncThunk } from '@reduxjs/toolkit';
import { rejectedMessage, resolvedMessage } from '../../utils/apiMessage';
import instance from '../instance';

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get('/api/users');

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);

export const createUser = createAsyncThunk(
  'user/createUser',
  async (data, thunkAPI) => {
    try {
      const resp = await instance.post('/api/users/', data);
      resolvedMessage('User Was successfully Created');
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.delete(`/api/users/${id}`);
      thunkAPI.dispatch(getUsers());
      resolvedMessage('User Was successfully Deleted');
      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
export const getUser = createAsyncThunk(
  'user/getUser',
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/api/users/${id}`);

      return resp.data;
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
