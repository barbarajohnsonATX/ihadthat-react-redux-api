import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
//import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import toys from './reducers/toys'
import toyFormData from './reducers/toyFormData'
import toyOwnerships from './reducers/toyOwnerships'
import thunk from 'redux-thunk';
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    //users: usersReducer, 
    currentUser,
    loginForm,
    toys,
    toyFormData,
    signupForm,
    toyOwnerships
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store