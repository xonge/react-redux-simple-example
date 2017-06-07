import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import RepoPage from './containers/RepoPage'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state 
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect 
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check 
})

console.log(UserIsAuthenticated)
export default <Route path="/" component={App}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserIsAuthenticated(UserPage)} />
</Route>