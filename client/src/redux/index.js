import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {},
});

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
