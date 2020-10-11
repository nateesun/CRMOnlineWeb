/*
 *
 * Login actions
 *
 */

import * as constants from './constants';

export function initDatabase(payload) {
  return {
    type: constants.INIT_DATABASE,
    payload,
  };
}
export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function clearLogin() {
  return {
    type: constants.CLEAR_LOGIN,
  };
}

export function checkLogin(email, password) {
  return {
    type: constants.CHECK_LOGIN,
    payload: {
      email,
      password,
    },
  };
}

export function checkLoginSuccess(payload) {
  return {
    type: constants.CHECK_LOGIN_SUCCESS,
    payload,
  };
}

export function checkLoginError(error) {
  return {
    type: constants.CHECK_LOGIN_ERROR,
    payload: error,
  };
}

export function checkLogout() {
  return {
    type: constants.CHECK_LOGOUT,
  };
}

export function checkLogoutSuccess() {
  return {
    type: constants.CHECK_LOGOUT_SUCCESS,
  };
}

export function checkLogoutError(error) {
  return {
    type: constants.CHECK_LOGOUT_ERROR,
    payload: error,
  };
}

export function loadProfileFromToken(token) {
  return {
    type: constants.LOAD_PROFILE_TOKEN,
    payload: token,
  };
}
