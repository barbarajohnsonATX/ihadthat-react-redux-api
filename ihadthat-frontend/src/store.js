import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    users: usersReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store