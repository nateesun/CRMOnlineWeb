/*
 *
 * Authentication actions
 *
 */

import * as constants from './constants';

export function loadRole(payload) {
  return {
    type: constants.LOAD_ROLE,
    payload,
  };
}
export function loadRoleSuccess(payload) {
  return {
    type: constants.LOAD_ROLE_SUCCESS,
    payload,
  };
}
export function loadRoleError(error) {
  return {
    type: constants.LOAD_ROLE_ERROR,
    error,
  };
}
