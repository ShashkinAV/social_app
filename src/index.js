import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.sass";
import App from "./App";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//Функция перерисовки компонентов React
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>, document.getElementById("root")
);
