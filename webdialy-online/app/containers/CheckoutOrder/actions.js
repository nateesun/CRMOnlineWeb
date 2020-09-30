/*
 *
 * Checkout actions
 *
 */

import * as constants from './constants';

export function loadCart(payload) {
  return {
    type: constants.LOAD_CART,
    payload,
  };
}
export function loadCartSuccess(payload) {
  return {
    type: constants.LOAD_CART_SUCCESS,
    payload,
  };
}
export function loadCartError(payload) {
  return {
    type: constants.LOAD_CART_ERROR,
    payload,
  };
}
