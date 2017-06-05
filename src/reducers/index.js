import { combineReducers } from 'redux'
import {
    SELECT_REDDIT, INVALIDATE_REDDIT,
    REQUEST_POSTS, RECEIVE_POSTS,
    RECEIVE_NEWS, REQUEST_NEWS, INVALIDATE_NEWS
} from '../actions'

const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit
        default:
            return state
    }
}

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_REDDIT:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            console.log('ssssss');
            console.log(action.posts);
            console.log(action.news);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const news = (state = {
    isFetching: false,
    didInvalidate: false,
    items1: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_NEWS:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_NEWS:
            console.log('xxx1111xxx');
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_NEWS:
            console.log('xxxxxx');
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items1: action.news,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsByReddit = (state = { }, action) => {
    console.log(action.reddit);
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case RECEIVE_NEWS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action),
            
            }
        default:
            return state
    }
}

const newsByReddit = (state = { }, action) => {
    console.log('newsByReddit');
    console.log(action.reddit);
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case RECEIVE_NEWS:
        case REQUEST_NEWS:
            console.log('kkkkk');
            console.log(state);
            return {
                ...state,
                [action.reddit]: news(state[action.reddit], action),
            
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit,
    newsByReddit
})

export default rootReducer