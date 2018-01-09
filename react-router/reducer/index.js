import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const initialState = {
  name: ''
}

const LOGIN = 'LOGIN'
const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
const FAIL_LOGIN = 'FAIL_LOGIN'

const LOGOUT = 'LOGOUT'

export const login = (name) => ({ type: LOGIN, name })

export const successLogin = (name) => ({ type: LOGIN, name })

export const failLogin = (name) => ({ type: LOGIN, name })


export const logout = () => ({ type: LOGOUT })

export function serverLogin(name) {
  return function (dispatch) {
    return fetch('http://localhost:9999/login', {
      // mode: 'no-cors',
      method: "POST",
      body: JSON.stringify({ name })
    }).then(resp => resp.json()).then((parsedData) => {
      if (parsedData.token) {
        dispatch(successLogin(name))
        localStorage.setItem('token', parsedData.token)
        return true
      }
      return false
    })
  }
}

export function serverLogout() {
  return function (dispatch) {
    return fetch('http://localhost:9999/logout', {
      // mode: 'no-cors',
      method: "POST",
      body: JSON.stringify({ token: localStorage.getItem('token') })
    }).then(resp => resp.json()).then((parsedData) => {
      if (parsedData.logout) {
        dispatch(logout())
        return true
      }
      return false
    })
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, name: action.name }
    case SUCCESS_LOGIN:
      return { ...state, name: action.name }
    case LOGOUT:
      return { ...state, name: '' }
    default:
      return state
  }
}

export default createStore(combineReducers({
  loginReducer
}), applyMiddleware(
  thunkMiddleware
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
