import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    homePage: homeReducer,
		messagePage: messageReducer,
		profilePage: profileReducer,
		usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;