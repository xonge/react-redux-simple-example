/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_1 = 'ADD_TODO_1';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  console.log(text)
  return { type: ADD_TODO_1, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: 'FETCH_1',
  }
}
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {
  console.log(json)
  return {
    type: 'FETCH',
    images: json,
    receivedAt: Date.now()
  }
}


export function fetchAnimezilla() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`http://busbus.app/animezilla`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
}