import {combineReducers, createStore} from 'redux';
import homeReducer from './homeReducer';
import messageReducer from './messageReducer';

let reducers = combineReducers({
    homePage: homeReducer,
    messagePage: messageReducer,
});

let store = createStore(reducers);

export default store;