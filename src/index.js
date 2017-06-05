import React from 'react';
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
                <Route exact path="/" component={App}/>
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
)
