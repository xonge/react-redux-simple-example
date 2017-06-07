import * as constants from '../constants'

export function login(data) {
    console.log('login')
  return {
    type: constants.USER_LOGGED_IN,
    payload: data
  }
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  }
}
