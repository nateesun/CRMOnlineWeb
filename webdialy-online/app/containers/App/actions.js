import * as constants from './constants';

export function initLoad() {
  return {
    type: constants.INIT_LOAD,
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
    error,
  };
}
export function clearMenu() {
  return {
    type: constants.CLEAR_MENU,
  };
}