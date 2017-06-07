export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export default function userUpdate(state = {
  name: JSON.parse(localStorage.getItem('token')) || null
}, { type, payload }) {
  if(type === USER_LOGGED_IN) {
    return payload
  }
  else if(type === USER_LOGGED_OUT) {
    return {}
  }
  console.log(state)
  return state
}