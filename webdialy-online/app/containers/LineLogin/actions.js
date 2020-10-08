/*
 *
 * LineLogin actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function verifyToken(token) {
  return {
    type: constants.VERIFY_TOKEN,
    payload: {
      token,
    },
  };
}

export function verifyTokenSuccess(payload) {
  return {
    type: constants.VERIFY_TOKEN_SUCCESS,
    payload,
  };
}

export function verifyTokenError(error) {
  return {
    type: constants.VERIFY_TOKEN_ERROR,
    payload: error,
  };
}
