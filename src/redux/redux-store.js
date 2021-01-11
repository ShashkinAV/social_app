import {applyMiddleware, combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    homePage: homeReducer,
		messagePage: messageReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
		auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;