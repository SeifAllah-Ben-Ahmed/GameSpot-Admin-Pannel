import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  pending: false,
  isAuthenticated: localStorage.getItem('isAuthenticated')
    ? JSON.parse(localStorage.getItem('isAuthenticated'))
    : false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    pending: (state) => {
      state.pending = true;
    },
    login: (state, action) => {
      state.user = action.payload.data.user;
      state.isAuthenticated = true;
      state.pending = false;

      localStorage.setItem(
        'isAuthenticated',
        JSON.stringify(state.isAuthenticated)
      );
    },
    rejected: (state) => {
      state.pending = false;
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { pending, login, rejected } = userSlice.actions;
export default userSlice.reducer;
