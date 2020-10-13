/*
 *
 * MemberOrdersConfirm actions
 *
 */

import * as constants from './constants';

export function loginToConfirm(payload) {
  return {
    type: constants.LOGIN_TO_CONFIRM,
    payload,
  };
}
export function loginToConfirmSuccess(payload) {
  return {
    type: constants.LOGIN_TO_CONFIRM_SUCCESS,
    payload,
  };
}
export function loginToConfirmError(payload) {
  return {
    type: constants.LOGIN_TO_CONFIRM_ERROR,
    payload,
  };
}

export function confirmOrder(payload) {
  return {
    type: constants.CONFIRM_ORDERS,
    payload,
  };
}
export function confirmOrderSuccess(payload) {
  return {
    type: constants.CONFIRM_ORDERS_SUCCESS,
    payload,
  };
}
export function confirmOrderError(payload) {
  return {
    type: constants.CONFIRM_ORDERS_ERROR,
    payload,
  };
}
