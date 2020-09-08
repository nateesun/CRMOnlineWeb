/*
 *
 * LineLogin actions
 *
 */

import {
  DEFAULT_ACTION,
  VERIFY_TOKEN,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function verifyToken(token) {
  return {
    type: VERIFY_TOKEN,
    payload: {
      token,
    },
  };
}

export function verifyTokenSuccess(payload) {
  return {
    type: VERIFY_TOKEN_SUCCESS,
    payload,
  };
}

export function verifyTokenError(error) {
  return {
    type: VERIFY_TOKEN_ERROR,
    payload: error,
  };
}
