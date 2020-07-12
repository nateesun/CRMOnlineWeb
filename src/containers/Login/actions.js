import {
  CHECK_LOGIN,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_ERROR,
  CHECK_LOGOUT,
  CHECK_LOGOUT_SUCCESS,
  CHECK_LOGOUT_ERROR,
} from "./constants"

export function checkLogin(username, password) {
  return {
    type: CHECK_LOGIN,
    payload: {
      username,
      password,
    },
  }
}

export function checkLoginSuccess() {
  return {
    type: CHECK_LOGIN_SUCCESS,
  }
}

export function checkLoginError(error) {
  return {
    type: CHECK_LOGIN_ERROR,
    payload: error,
  }
}

export function checkLogout() {
  return {
    type: CHECK_LOGOUT,
  }
}

export function checkLogoutSuccess() {
  return {
    type: CHECK_LOGOUT_SUCCESS,
  }
}

export function checkLogoutError(error) {
  return {
    type: CHECK_LOGOUT_ERROR,
    payload: error,
  }
}
