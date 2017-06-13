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
function requestAnimezilla() {
  return {
    type: 'FETCH_1',
  }
}
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receiveAnimezilla(json, go, page) {
  console.log(json)
  return {
    type: 'FETCH',
    images: json,
    receivedAt: Date.now(),
    go,
    page
  }
}
export const FAILURE_POSTS = 'FAILURE_POSTS'
function failureAnimezilla() {
  return {
    type: 'FAILURE',
  }
}

function shouldFetchAnimezilla(state) {
  console.log('------->')
  console.log(state)
  console.log('<-------')
  const images = state.images
  console.log(images)
  if (!images.isFetching) {
    console.log('可以')
    return true
  } else if (images.isFetching) {
    console.log('正在请求api')
    return false
  } else {
    return images.didInvalidate
  }
}

export function fetchAnimezilla(page, go) {
  return (dispatch, getState) => {
    if (shouldFetchAnimezilla(getState())) {
      dispatch(requestAnimezilla())
      console.log('可以发送请求')
      console.log(getState())
      const {images} = getState()
      console.log('前面一步是哪个方向：' + go)
      console.log('前面一步第几页：' + images.page)
      if (go === 'right') {
        page = images.page - 1
        console.log('减去的页数：' + page)
        if (page <= 0) {
          page = 1
        }
      } else {
        page = images.page + 1
      }
      
      return fetch(`http://busbus.app/animezilla/${page}`)
        .then(response => response.json())
        .then(json => dispatch(receiveAnimezilla(json, go, page)))
        .catch(function(e) {
          console.log("Oops, error");
          dispatch(failureAnimezilla())
        });
    }
  }
}