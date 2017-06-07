/*import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
//把需要登录状态验证的Component传入到这个高阶函数中
export function requireAuthentication(Component) {
    class AuthenticatedComponent extends Component {
        constructor(props) {
            super(props)
        }
        //只在首次Mount时来验证权限
        componentWillMount() {
            this.checkAuth();
        }
        checkAuth(){
            const {path,isSignIn,dispatch}=this.props;
            if(!isSignIn){
                //没有登录
                //记录当前页面path
                //跳转到SignIn Page处理登录 登录完成够会跳回当前页面
                // dispatch(CommonActions.setNextUrl(path))
                browserHistory.push('/sign');
            }
        }
        render() {
            console.log('auth render')
            return (
                <div>
                
                    {this.props.isSignIn == true
                        ? <Component  {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        path:state.routing.locationBeforeTransitions.pathname,
        isSignIn:state.common.isSignIn,
        state:state
    })
    return connect(mapStateToProps)(AuthenticatedComponent);
}*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
     return response.json()


}
