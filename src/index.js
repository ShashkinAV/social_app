import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';
import state from './redux/state.js';


ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);
