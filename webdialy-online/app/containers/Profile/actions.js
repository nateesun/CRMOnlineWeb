/*
 *
 * Profile actions
 *
 */

import * as types from './constants';

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
    error,
  };
}
