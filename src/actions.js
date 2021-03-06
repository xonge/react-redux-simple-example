/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_1 = 'ADD_TODO_1';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

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
  console.log('收到了第' + page +'页的图片')
  localStorage.lastpage = page
  localStorage.lastpage_time = Date.now()
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
  console.log('从input传入的页数：' + page)
  page = parseInt(page, 10)
  return (dispatch, getState) => {
    if (shouldFetchAnimezilla(getState())) {
      dispatch(requestAnimezilla())
      console.log('可以发送请求')
      console.log(getState())
      const { images } = getState()
      console.log('前面一步是哪个方向：' + go)
      console.log('前面一步第几页：' + images.page)
      // if (go === 'right') {
      //   page = page - 1
      //   console.log('减去的页数：' + page)
      //   if (page <= 0) {
      //     page = 1
      //   }
      // } else {
      //   page = page + 1
      // }

      // return fetch(`http://busbus.app/animezilla/${page}`)
      return fetch(`http://api.busbus.club/animezilla/${page}`)
        .then(response => response.json())
        .then(json => dispatch(receiveAnimezilla(json, go, page)))
        .catch(function (e) {
          console.log("Oops, error");
          dispatch(failureAnimezilla())
        });
    }
  }
}

function requestUser() {
  return {
    type: 'LOGIN',
  }
}
function receiveUser(json, go, page) {
  console.log(json)
  return {
    type: 'LOGIN_SUCCESS',
    user: json,
    receivedAt: Date.now(),
  }
}
function failureUser() {
  return {
    type: 'LOGIN_FAILURE',
  }
}
function shouldLogin(state) {
  const { login } = state
  if (!login.isFetching) {
    console.log('可以登录')
    return true
  } else if (login.isFetching) {
    console.log('正在请求登录')
    return false
  } else {
    return login.didInvalidate
  }
}
export function fetchLogin(page, go) {
  console.log('从input传入的页数：' + page)
  return (dispatch, getState) => {
    if (shouldLogin(getState())) {
      dispatch(requestUser())
      return fetch(`http://busbus.app/oauth/token`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          grant_type: 'password',
          client_id: 2,
          client_secret: 'k49AIRizxXk5cbrBAkmTYr1wc9S2bEHSiuBy8csM',
          username: 'xonge@qq.com',
          password: '123456asd',
          scope: '',
        })
      })
        .then(response => response.json())
        .then(json => dispatch(receiveUser(json, go, page)))
        .catch(function (e) {
          console.log("Oops, error");
          dispatch(failureUser())
        })
    }
  }
}

function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isAuth: false,
    receivedAt: Date.now(),
  }
}

function logout() {
  history.push('/login')
  location.reload()
}

export function fetchLogout(page, go) {
  return (dispatch, getState) => {
    delete localStorage.token
    dispatch(receiveLogout())
    setTimeout(logout, 100)
  }
}