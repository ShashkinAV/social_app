import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";

//Функция перерисовки компонентов React
let rerender = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App 
					state={store.getState()}
					dispatch={store.dispatch.bind(store)}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
store.subscribe(rerender);

//Запуск функции рендера приложения
store._rerender(store.getState());
