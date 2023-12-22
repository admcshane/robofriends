import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk as thunkMiddleware } from 'redux-thunk';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App'
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = 
createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));