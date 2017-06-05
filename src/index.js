import React from 'react';
import { render } from 'react-dom';
// import App from './App';
import './index.css';

// import createHistory from 'history/createBrowserHistory'
// import { Route } from 'react-router'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'


// Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()
// const middleware_h = routerMiddleware(history)

// Build the middleware for intercepting and dispatching navigation actions

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    combineReducers({
        reducer,
        // router: routerReducer
    }),
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
