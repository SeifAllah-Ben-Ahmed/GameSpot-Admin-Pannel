import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './theme/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
