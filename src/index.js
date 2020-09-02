import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';
import state from './redux/state.js';
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
