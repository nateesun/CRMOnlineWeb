/*
 *
 * MemberOrdersConfirm actions
 *
 */

import * as constants from './constants';

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
