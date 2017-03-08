import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import routes from "base/routes/routes";
import thunk from "redux-thunk";
import {rootReducer} from "base/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const childRoutes = routes(store);

// Create an enhanced history that syncs navigation events with the store

ReactDOM.render((
  <Provider store={store}>
    <Router children={childRoutes} history={browserHistory} />
  </Provider>
), document.getElementById('root'));
