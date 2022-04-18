import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeContext';

const Initial_State = {
  darkMode: false,
};

export const DarkModeContext = createContext(Initial_State);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, Initial_State);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
