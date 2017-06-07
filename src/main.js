import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger';

import App from './app';

// Apply the middleware to the store
const rMiddleware = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger();

/* Resources */
require('./styles/global.scss');

const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
  applyMiddleware(
    rMiddleware,
    loggerMiddleware,
  ),
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  window.document.getElementById('root'),
);
