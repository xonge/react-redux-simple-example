// import { combineReducers } from 'redux'
// import {
//     SELECT_REDDIT, INVALIDATE_REDDIT,
//     REQUEST_POSTS, RECEIVE_POSTS,
//     RECEIVE_NEWS, REQUEST_NEWS, INVALIDATE_NEWS
// } from '../actions'
// import { routerReducer} from 'react-router-redux'

// const selectedReddit = (state = 'reactjs', action) => {
//     switch (action.type) {
//         case SELECT_REDDIT:
//             return action.reddit
//         default:
//             return state
//     }
// }

// const posts = (state = {
//     isFetching: false,
//     didInvalidate: false,
//     items: []
// }, action) => {
//     switch (action.type) {
//         case INVALIDATE_REDDIT:
//             return {
//                 ...state,
//                 didInvalidate: true
//             }
//         case REQUEST_POSTS:
//             return {
//                 ...state,
//                 isFetching: true,
//                 didInvalidate: false
//             }
//         case RECEIVE_POSTS:
//             console.log('ssssss');
//             console.log(action.posts);
//             console.log(action.news);
//             return {
//                 ...state,
//                 isFetching: false,
//                 didInvalidate: false,
//                 items: action.posts,
//                 lastUpdated: action.receivedAt
//             }
//         default:
//             return state
//     }
// }

// const news = (state = {
//     isFetching: false,
//     didInvalidate: false,
//     items1: []
// }, action) => {
//     switch (action.type) {
//         case INVALIDATE_NEWS:
//             return {
//                 ...state,
//                 didInvalidate: true
//             }
//         case REQUEST_NEWS:
//             console.log('xxx1111xxx');
//             return {
//                 ...state,
//                 isFetching: true,
//                 didInvalidate: false
//             }
//         case RECEIVE_NEWS:
//             console.log('xxxxxx');
//             return {
//                 ...state,
//                 isFetching: false,
//                 didInvalidate: false,
//                 items1: action.news,
//                 lastUpdated: action.receivedAt
//             }
//         default:
//             return state
//     }
// }

// const postsByReddit = (state = { }, action) => {
//     console.log(action.reddit);
//     switch (action.type) {
//         case INVALIDATE_REDDIT:
//         case RECEIVE_POSTS:
//         case RECEIVE_NEWS:
//         case REQUEST_POSTS:
//             return {
//                 ...state,
//                 [action.reddit]: posts(state[action.reddit], action),
            
//             }
//         default:
//             return state
//     }
// }

// const newsByReddit = (state = { }, action) => {
//     console.log('newsByReddit');
//     console.log(action.reddit);
//     switch (action.type) {
//         case INVALIDATE_REDDIT:
//         case RECEIVE_POSTS:
//         case RECEIVE_NEWS:
//         case REQUEST_NEWS:
//             console.log('kkkkk');
//             console.log(state);
//             return {
//                 ...state,
//                 [action.reddit]: news(state[action.reddit], action),
            
//             }
//         default:
//             return state
//     }
// }

// const rootReducer = combineReducers({
//     postsByReddit,
//     selectedReddit,
//     newsByReddit,
//     router: routerReducer
// })

// export default rootReducer

import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import user from './user'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.STARRED_REQUEST,
      ActionTypes.STARRED_SUCCESS,
      ActionTypes.STARRED_FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionTypes.STARGAZERS_REQUEST,
      ActionTypes.STARGAZERS_SUCCESS,
      ActionTypes.STARGAZERS_FAILURE
    ]
  })
})

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  routing,
  user
})

export default rootReducer