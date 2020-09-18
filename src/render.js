import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

//Функция перерисовки компонентов React
export let rerender = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
