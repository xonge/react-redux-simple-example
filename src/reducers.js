import { combineReducers } from 'redux'
import { ADD_TODO, ADD_TODO_1, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO_1:
    console.log('start 1')
      return [
        ...state,
        {
          text: action.text + 'hhh',
          completed: false
        }
      ]
    case ADD_TODO:
    console.log('start')
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function images(state = [], action) {
  switch (action.type) {
    case 'FETCH_1':
    case 'FETCH':
    console.log('start 1')
    console.log(action.images)
      return [
        ...state,
        {
          img: action.images ? action.images[0].img : '',
          completed: false
        }
      ]
    case ADD_TODO:
    console.log('start')
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function todos_1(state = [], action) {
  switch (action.type) {
    case ADD_TODO_1:
    console.log('start 1')
      return [
        ...state,
        {
          text: action.text + 'zzzz',
          completed: false
        }
      ]
    case ADD_TODO:
    console.log('start')
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

function todos_2(state = [], action) {
  switch (action.type) {
    case ADD_TODO_1:
    console.log('start 1')
      return [
        ...state,
        {
          text: action.text + 'zzzz',
          completed: false
        }
      ]
    case ADD_TODO:
    console.log('start')
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

// 被combineReducers处理过的都会变成state，在容器组件里可以被connect第一个参数访问
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  todos_1,
  todos_2,
  images
})

export default todoApp