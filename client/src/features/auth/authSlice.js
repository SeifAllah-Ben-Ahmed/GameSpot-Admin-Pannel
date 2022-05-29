import { createSlice } from '@reduxjs/toolkit';
import { rejectedMessage } from '../../utils/apiMessage';
import { currentUser, login, logout } from './authApi';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: '',
    isLoading: false,
    user: {},
    isAuth: false,
    error: '',
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
      state.user = action.payload.data.user;
      state.isAuth =
        state.user.role === process.env.REACT_APP_ROLE
          ? true
          : rejectedMessage('warn', 'You are not allowed to access') && false;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
      state.isAuth = false;
    },
    [logout.pending]: (state) => {
      state.isLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
      state.user = {};
      state.isAuth = false;
    },
    [logout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
    [currentUser.pending]: (state) => {
      state.isLoading = true;
    },
    [currentUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
      state.user = action.payload.data.user;
      state.isAuth = state.user.role === process.env.REACT_APP_ROLE;
    },
    [currentUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload.message;
      state.status = action.payload.status;
    },
  },
});

export default authSlice.reducer;
