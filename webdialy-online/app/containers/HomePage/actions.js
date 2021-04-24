/*
 *
 * HomePage actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
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
export function initLoadError(payload) {
  return {
    type: constants.INIT_LOAD_ERROR,
    payload,
  };
}
