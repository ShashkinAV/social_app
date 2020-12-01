import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';

let reducers = combineReducers({
    homePage: homeReducer,
		messagePage: messageReducer,
		profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;