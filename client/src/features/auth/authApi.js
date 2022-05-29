import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../instance';
import { rejectedMessage } from '../../utils/apiMessage';

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const resp = await instance.post('/api/users/login', user);
    return thunkAPI.fulfillWithValue(resp.data);
  } catch (error) {
    const { message, status } = error.response.data;
    rejectedMessage(status, message);
    return thunkAPI.rejectWithValue({ message, status });
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const resp = await instance.get('/api/users/logout');
    return thunkAPI.fulfillWithValue(resp.data);
  } catch (error) {
    const { message, status } = error.response.data;
    rejectedMessage(status, message);
    return thunkAPI.rejectWithValue({ message, status });
  }
});

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get('/api/users/me');
      return thunkAPI.fulfillWithValue(resp.data);
    } catch (error) {
      const { message, status } = error.response.data;
      rejectedMessage(status, message);
      return thunkAPI.rejectWithValue({ message, status });
    }
  }
);
