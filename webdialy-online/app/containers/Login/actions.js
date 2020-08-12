/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_LOGIN,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_ERROR,
  CHECK_LOGOUT,
  CHECK_LOGOUT_SUCCESS,
  CHECK_LOGOUT_ERROR,
  CLEAR_LOGIN,
  LOAD_PROFILE_TOKEN,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function clearLogin() {
  return {
    type: CLEAR_LOGIN,
  }
}

export function checkLogin(email, password) {
  return {
    type: CHECK_LOGIN,
    payload: {
      email,
      password,
    },
  }
}

export function checkLoginSuccess(payload) {
  return {
    type: CHECK_LOGIN_SUCCESS,
    payload,
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

export function loadProfileFromToken(token) {
  return {
    type: LOAD_PROFILE_TOKEN,
    payload: token,
  }
}
