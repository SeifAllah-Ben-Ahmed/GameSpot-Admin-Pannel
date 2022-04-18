import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-circular-progressbar/dist/styles.css';
import './style/style.scss';
import { DarkModeContextProvider } from './context/darkModeReducer';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
