import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
