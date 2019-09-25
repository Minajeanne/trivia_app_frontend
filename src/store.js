import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import users from './reducers/users.js';
import currentUser from './reducers/currentUser.js';

const reducer = combineReducers({
  users
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
