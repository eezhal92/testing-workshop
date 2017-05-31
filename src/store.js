import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancers = [
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
];

export default createStore(rootReducer, compose(...enhancers));
