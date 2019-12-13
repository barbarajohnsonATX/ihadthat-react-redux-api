import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import toys from './reducers/toys'

import thunk from 'redux-thunk';
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    users: usersReducer, 
    currentUser,
    loginForm,
    toys
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store