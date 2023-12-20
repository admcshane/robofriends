import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App'
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));