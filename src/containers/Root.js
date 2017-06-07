// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./Root.prod')
// } else {
//   module.exports = require('./Root.dev')
// }

import React from 'react';
import {Provider} from 'react-redux';
import routes from '../routes';
import { Route } from 'react-router'

export default class Root extends React.Component {

    static propTypes = {
        store: React.PropTypes.object.isRequired
    };

    render () {
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        <Route>
                            {routes}
                        </Route>
                    </div>
                </Provider>
            </div>
        );
    }
}
