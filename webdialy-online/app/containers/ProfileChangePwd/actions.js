/*
 *
 * ProfileChangePwd actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function updatePassword(payload) {
  return {
    type: constants.UPDATE_PASSWORD,
    payload,
  };
}

export function updatePasswordSuccess() {
  return {
    type: constants.UPDATE_PASSWORD_SUCCESS,
  };
}

export function updatePasswordError(error) {
  return {
    type: constants.UPDATE_PASSWORD_ERROR,
    payload: error,
  };
}

export function initLoad(payload) {
  return {
    type: constants.INIT_LOAD,
    payload,
  };
}

export function initLoadSuccess(payload) {
  return {
    type: constants.INIT_LOAD_SUCCESS,
    payload,
  };
}

export function initLoadError(error) {
  return {
    type: constants.INIT_LOAD_ERROR,
    payload: error,
  };
}
