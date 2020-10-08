/*
 *
 * ProfileChangePwd actions
 *
 */

import * as types from './constants';

export function initState() {
  return {
    type: types.INIT_STATE,
  };
}

export function updatePassword(payload) {
  return {
    type: types.UPDATE_PASSWORD,
    payload,
  };
}

export function updatePasswordSuccess() {
  return {
    type: types.UPDATE_PASSWORD_SUCCESS,
  };
}

export function updatePasswordError(error) {
  return {
    type: types.UPDATE_PASSWORD_ERROR,
    payload: error,
  };
}

export function initLoad(payload) {
  return {
    type: types.INIT_LOAD,
    payload,
  };
}

export function initLoadSuccess(payload) {
  return {
    type: types.INIT_LOAD_SUCCESS,
    payload,
  };
}

export function initLoadError(error) {
  return {
    type: types.INIT_LOAD_ERROR,
    payload: error,
  };
}
