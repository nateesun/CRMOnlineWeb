/*
 *
 * MainLayoutApp actions
 *
 */

import * as constants from './constants';

export function loadProfile() {
  return {
    type: constants.LOAD_PROFILE,
  };
}
export function loadProfileSuccess(payload) {
  return {
    type: constants.LOAD_PROFILE_SUCCESS,
    payload,
  };
}
export function loadProfileError(error) {
  return {
    type: constants.LOAD_PROFILE_ERROR,
    error,
  };
}
