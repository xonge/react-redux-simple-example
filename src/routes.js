import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'
import {

  Redirect,
  
} from 'react-router-dom'
import requireAuthentication from './util/index'

import Foo from './components/Foo'
import { IndexRoute } from 'react-router'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state 
  // redirectAction: 'ff', // the redux action to dispatch for redirect 
  // failureRedirectPath: '/',
  // wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check 
})

console.log(UserIsAuthenticated)
export default <Route path="/">
<IndexRoute component={App}/>
  <Route path="login" component={Foo}/>
         <Route path="hehe"
         component={UserIsAuthenticated(Foo)} />
</Route>