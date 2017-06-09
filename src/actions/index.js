// export const REQUEST_POSTS = 'REQUEST_POSTS'
// export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const SELECT_REDDIT = 'SELECT_REDDIT'
// export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'
// export const INVALIDATE_NEWS = 'INVALIDATE_NEWS'
// export const REQUEST_NEWS = 'REQUEST_NEWS'
// export const RECEIVE_NEWS = 'RECEIVE_NEWS'

// export const selectReddit = reddit => ({
//     type: SELECT_REDDIT,
//     reddit
// })

// export const invalidateReddit = reddit => ({
//     type: INVALIDATE_REDDIT,
//     reddit
// })

// export const requestPosts = reddit => ({
//     type: REQUEST_POSTS,
//     reddit,
// })

// export const receivePosts = (reddit, json) => ({
//     type: RECEIVE_POSTS,
//     reddit,
//     posts: json.data.children.map(child => child.data),
//     // news: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
// })

// export const requestNews = reddit => ({
//     type: REQUEST_NEWS,
//     reddit,
// })

// export const receiveNews = (reddit, json) => (
//     {
//     type: RECEIVE_NEWS,
//     reddit,
//     news: json.map(child => child),
//     receivedAt: Date.now()
// }
// )

// const fetchPosts = reddit => dispatch => {
//     dispatch(requestPosts(reddit))
//     console.log('zzzz');
//     return fetch(`https://www.reddit.com/r/${reddit}.json`)
//         .then(response => response.json())
//         .then(json => dispatch(receivePosts(reddit, json)))
// }

// const fetchNews = reddit => dispatch => {
//     dispatch(requestNews(reddit))
//     console.log('fetch news');
//     return fetch(`http://busbus.app/kneesocks`)
//         .then(response => response.json())
//         .then(json => dispatch(receiveNews(reddit, json)))
// }

// const shouldFetchPosts = (state, reddit) => {
//     const posts = state.postsByReddit[reddit]
//     if (!posts) {
//         return true
//     }
//     if (posts.isFetching) {
//         return false
//     }
//     return posts.didInvalidate
// }

// export const fetchPostsIfNeeded = reddit => (dispatch, getState) => {
//     dispatch(fetchNews(reddit))
//     if (shouldFetchPosts(getState(), reddit)) {
        
//         return dispatch(fetchPosts(reddit))
//     }
// }

// import { CALL_API, Schemas } from '../middleware/api'

// export const USER_REQUEST = 'USER_REQUEST'
// export const USER_SUCCESS = 'USER_SUCCESS'
// export const USER_FAILURE = 'USER_FAILURE'

// // Fetches a single user from Github API.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchUser = login => ({
//   [CALL_API]: {
//     types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
//     endpoint: `users/${login}`,
//     schema: Schemas.USER
//   }
// })

// // Fetches a single user from Github API unless it is cached.
// // Relies on Redux Thunk middleware.
// export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
//   const user = getState().entities.users[login]
//   if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
//     return null
//   }

//   return dispatch(fetchUser(login))
// }

// export const REPO_REQUEST = 'REPO_REQUEST'
// export const REPO_SUCCESS = 'REPO_SUCCESS'
// export const REPO_FAILURE = 'REPO_FAILURE'

// // Fetches a single repository from Github API.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchRepo = fullName => ({
//   [CALL_API]: {
//     types: [ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
//     endpoint: `repos/${fullName}`,
//     schema: Schemas.REPO
//   }
// })

// // Fetches a single repository from Github API unless it is cached.
// // Relies on Redux Thunk middleware.
// export const loadRepo = (fullName, requiredFields = []) => (dispatch, getState) => {
//   const repo = getState().entities.repos[fullName]
//   if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) {
//     return null
//   }

//   return dispatch(fetchRepo(fullName))
// }

// export const STARRED_REQUEST = 'STARRED_REQUEST'
// export const STARRED_SUCCESS = 'STARRED_SUCCESS'
// export const STARRED_FAILURE = 'STARRED_FAILURE'

// // Fetches a page of starred repos by a particular user.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchStarred = (login, nextPageUrl) => ({
//   login,
//   [CALL_API]: {
//     types: [ STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE ],
//     endpoint: nextPageUrl,
//     schema: Schemas.REPO_ARRAY
//   }
// })

// // Fetches a page of starred repos by a particular user.
// // Bails out if page is cached and user didn't specifically request next page.
// // Relies on Redux Thunk middleware.
// export const loadStarred = (login, nextPage) => (dispatch, getState) => {
//   const {
//     nextPageUrl = `users/${login}/starred`,
//     pageCount = 0
//   } = getState().pagination.starredByUser[login] || {}

//   if (pageCount > 0 && !nextPage) {
//     return null
//   }

//   return dispatch(fetchStarred(login, nextPageUrl))
// }

// export const STARGAZERS_REQUEST = 'STARGAZERS_REQUEST'
// export const STARGAZERS_SUCCESS = 'STARGAZERS_SUCCESS'
// export const STARGAZERS_FAILURE = 'STARGAZERS_FAILURE'

// // Fetches a page of stargazers for a particular repo.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchStargazers = (fullName, nextPageUrl) => ({
//   fullName,
//   [CALL_API]: {
//     types: [ STARGAZERS_REQUEST, STARGAZERS_SUCCESS, STARGAZERS_FAILURE ],
//     endpoint: nextPageUrl,
//     schema: Schemas.USER_ARRAY
//   }
// })

// // Fetches a page of stargazers for a particular repo.
// // Bails out if page is cached and user didn't specifically request next page.
// // Relies on Redux Thunk middleware.
// export const loadStargazers = (fullName, nextPage) => (dispatch, getState) => {
//   const {
//     nextPageUrl = `repos/${fullName}/stargazers`,
//     pageCount = 0
//   } = getState().pagination.stargazersByRepo[fullName] || {}

//   if (pageCount > 0 && !nextPage) {
//     return null
//   }

//   return dispatch(fetchStargazers(fullName, nextPageUrl))
// }

// export const TOKEN_REQUEST = 'TOKEN_REQUEST'
// export const TOKEN_SUCCESS = 'TOKEN_SUCCESS'
// export const TOKEN_FAILURE = 'TOKEN_FAILURE'

// // Fetches a page of stargazers for a particular repo.
// // Relies on the custom API middleware defined in ../middleware/api.js.
// const fetchToken = (fullName, nextPageUrl) => ({
//   fullName,
//   [CALL_API]: {
//     types: [ TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE ],
//     endpoint: nextPageUrl,
//     schema: Schemas.USER_ARRAY
//   }
// })

// // Fetches a page of stargazers for a particular repo.
// // Bails out if page is cached and user didn't specifically request next page.
// // Relies on Redux Thunk middleware.
// export const loadToken = (fullName, nextPage) => (dispatch, getState) => {
//   const {
//     nextPageUrl = `repos/${fullName}/stargazers`,
//     pageCount = 0
//   } = getState().pagination.stargazersByRepo[fullName] || {}

//   if (pageCount > 0 && !nextPage) {
//     return null
//   }

//   return dispatch(fetchToken(fullName, 'oauth/token'))
// }

// export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// // Resets the currently visible error message.
// export const resetErrorMessage = () => ({
//     type: RESET_ERROR_MESSAGE
// })

import { checkHttpStatus, parseJSON } from '../utils';
import {LOGIN_USER_REQUEST, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, LOGOUT_USER, FETCH_PROTECTED_DATA_REQUEST, RECEIVE_PROTECTED_DATA, TEST_R} from '../constants';
// import { pushState } from 'redux-router';
import jwtDecode from 'jwt-decode';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

// export function loginUserRequest() {
//   return {
//     type: LOGIN_USER_REQUEST
//   }
// }

export const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
})

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER
    }
}

export function logoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(logout());
        // dispatch(pushState(null, '/login'));
    }
}

export const loadStarred = (email, password, redirect="/") => dispatch => {
  console.log('yyyyyy')
}

function addTodo(text) {
  return {
    type: TEST_R,
    text
  }
}

export const testr = (email, password, redirect="/") => {
    // dispatch(addTodo('hhhh'))
    
}

export const loginUser2 = (email, password, redirect="/") => dispatch => {
  console.log('zzzzz')
    dispatch(loginUserRequest());
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({email: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token));
                    // dispatch(pushState(null, redirect));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
}

export function loginUser(email, password, redirect="/") {
  console.log('loginuser')
    return function(dispatch) {
      console.log('loginuser1111')
        dispatch(loginUserRequest());
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({email: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token));
                    // dispatch(pushState(null, redirect));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}

export function receiveProtectedData(data) {
    return {
        type: RECEIVE_PROTECTED_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchProtectedDataRequest() {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST
  }
}

export function fetchProtectedData(token) {

    return (dispatch, state) => {
        dispatch(fetchProtectedDataRequest());
        return fetch('http://localhost:3000/getData/', {
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                dispatch(receiveProtectedData(response.data));
            })
            .catch(error => {
                if(error.response.status === 401) {
                  dispatch(loginUserFailure(error));
                  // dispatch(pushState(null, '/login'));
                }
            })
       }
}
