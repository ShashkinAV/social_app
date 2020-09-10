import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';
import { addPost } from './redux/state.js';
import { BrowserRouter } from "react-router-dom";

export let rerender = (state)=> {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

}
  

