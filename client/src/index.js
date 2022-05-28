import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './theme/style.scss';
import { Provider } from 'react-redux';
import { store } from './features';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
