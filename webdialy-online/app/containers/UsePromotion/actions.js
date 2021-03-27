/*
 *
 * UsePromotion actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}
export function changePage(payload) {
  return {
    type: constants.CHANGE_PAGE,
    payload,
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

export function search(payload) {
  return {
    type: constants.SEARCH,
    payload,
  };
}

export function searchSuccess(payload) {
  return {
    type: constants.SEARCH_SUCCESS,
    payload,
  };
}

export function searchError(payload) {
  return {
    type: constants.SEARCH_ERROR,
    payload,
  };
}
