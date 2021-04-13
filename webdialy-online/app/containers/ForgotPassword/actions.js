/*
 *
 * ForgotPassword actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function requestPassword(payload) {
  return {
    type: constants.REQUEST_PASSWORD,
    payload,
  };
}
export function requestPasswordSuccess(payload) {
  return {
    type: constants.REQUEST_PASSWORD_SUCCESS,
    payload,
  };
}
export function requestPasswordError(payload) {
  return {
    type: constants.REQUEST_PASSWORD_ERROR,
    payload,
  };
}

export function sendEmail(payload) {
  return {
    type: constants.SEND_EMAIL,
    payload,
  };
}
export function sendEmailSuccess(payload) {
  return {
    type: constants.SEND_EMAIL_SUCCESS,
    payload,
  };
}
export function sendEmailError(payload) {
  return {
    type: constants.SEND_EMAIL_ERROR,
    payload,
  };
}
