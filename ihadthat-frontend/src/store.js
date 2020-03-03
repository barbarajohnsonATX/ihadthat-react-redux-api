import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import toyFormData from './reducers/toyFormData'
import errors from './reducers/errors'
import toysReducer from './reducers/toysReducer'

import thunk from 'redux-thunk';
  

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
    loginForm,
    toyFormData,
    signupForm,
    errors,
    toysReducer
});

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store