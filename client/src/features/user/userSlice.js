import { createSlice } from '@reduxjs/toolkit';
import { getUser, getUsers } from './userApi';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: '',
    isLoading: false,
    user: {},
    users: [],
    error: '',
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
      state.status = action.payload.status;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    [getUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.user;
      state.status = action.payload.status;
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
  },
});

export default userSlice.reducer;
