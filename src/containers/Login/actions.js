import {
    CHECK_LOGIN,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_ERROR,
  } from "./constants"
  
  export function checkLogin(username, password) {
    return {
      type: CHECK_LOGIN,
      payload: {
          username, password
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
  