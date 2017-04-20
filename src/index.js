import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import routes from './routes';
import reducers from './reducers';
import "../style/main.less"

const routerHistory = browserHistory;


const middleware = routerMiddleware(routerHistory);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, middleware)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(routerHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>
    , document.querySelector('.container'));

