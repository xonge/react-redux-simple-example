/*import React from 'react';
import { render } from 'react-dom';
// import App from './App';
import './index.css';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'

// 引入weui的样式，ant-design太麻烦了，需要设置babel
import WeUI from 'react-weui'; // 这里有warning，PropTypes已经不被reactjs官方支持了
import 'weui';
import 'react-weui/lib/react-weui.min.css';
const {Button, Tab, TabBarItem, Article} = WeUI;

// 兼容redux的router
const history = createHistory()
const middleware_h = routerMiddleware(history)

const middleware = [ thunk,middleware_h ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer, // 现在放在了containers/App.js里面
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/tttt" component={App}/>
                <brick-flipbox class="demo">
                    <div>front</div>
                    <div>back</div>
                </brick-flipbox>
                <Button>Start</Button>
                <Tab type="tabbar">
                    <TabBarItem label="Tab1">
                        <Article>
                            <h1>Page 1</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>1.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                    <TabBarItem label="Tab2">
                        <Article>
                            <h1>Page 2</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>2.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                    <TabBarItem label="Tab3">
                        <Article>
                            <h1>Page 3</h1>
                            <section>
                                <h2 className="title">Heading</h2>
                                <section>
                                    <h3>3.1 Title</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute</p>
                                </section>
                            </section>
                        </Article>
                    </TabBarItem>
                </Tab>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)*/

// import React from 'react'
// import { render } from 'react-dom'
// import { browserHistory } from 'react-router'
// import { createBrowserHistory } from 'history';
// import { syncHistoryWithStore, routerActions } from 'react-router-redux'
// import Root from './containers/Root'
// import configureStore from './store/configureStore'

// console.log(browserHistory)
// const store = configureStore()
// console.log(browserHistory)
// console.log(createBrowserHistory)
// const history = syncHistoryWithStore(browserHistory, store)

// render(
//   <Root store={store} history={history} />,
//   document.getElementById('root')
// )

/*import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducers'
import { App, Home, Foo, Login } from './components'
import { UserIsAuthenticated } from './util/wrappers.js'

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
)

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(routingMiddleware),
  DevTools.instrument()
)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer)
const history = syncHistoryWithStore(baseHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="login" component={Login}/>
          <Route path="foo" component={UserIsAuthenticated(Foo)}/>
          <Route path="haha/:hehe" component={UserIsAuthenticated(Foo)}/>
          <Route path="hehe" component={UserIsAuthenticated(Foo)}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
)*/


// import 'babel-core/polyfill';
// import React from 'react';
// import { render } from 'react-dom'
// // import Root from './containers/Root';
// import configureStore from './store/configureStore';
// import {loginUserSuccess} from './actions';
// import {Provider} from 'react-redux';
// import routes from './routes';
// import { Router, Route,IndexRoute,browserHistory } from 'react-router'
// import {App} from './containers';
// import {HomeView, LoginView, ProtectedView} from './views';
// import {requireAuthentication} from './components/AuthenticatedComponent';
// import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

// import ReactDOM from 'react-dom'
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

// import {reducers} from './reducers/auth'
// import { logger  } from 'redux-logger'

// const baseHistory = browserHistory
// const routingMiddleware = routerMiddleware(baseHistory)
// const reducer = combineReducers(Object.assign({}, reducers, {
//   routing: routerReducer
// }))

// const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey="ctrl-h"
//                changePositionKey="ctrl-q">
//     <LogMonitor theme="tomorrow" />
//   </DockMonitor>
// )

// const middleware = [routingMiddleware, logger]
// const enhancer = compose(
//   // Middleware you want to use in development:
//   applyMiddleware(...middleware),
//   DevTools.instrument()
// )

// // const store = configureStore(window.__INITIAL_STATE__);
// const store = createStore(reducer, enhancer)
// const history = syncHistoryWithStore(baseHistory, store)



// let token = localStorage.getItem('token');
// if (token !== null) {
//     store.dispatch(loginUserSuccess(token));
// }

// render(
//   <Provider store={store}>
//     <div>
//       <Router history={history}>
//         <Route path="/" component={HomeView}>
//          <IndexRoute component={HomeView}/>
//         <Route path="login" component={LoginView}/>
//         <Route path="protected" component={requireAuthentication(ProtectedView)}/>
//         </Route>
//       </Router>
//     </div>
//   </Provider>,
//   document.getElementById('root')
// )
import './index.css';
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

import thunkMiddleware from 'redux-thunk'
import {logger} from 'redux-logger'

let store = createStore(
    todoApp,
    applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    //logger // 一个很便捷的 middleware，用来打印 action 日志
  )
  )

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

