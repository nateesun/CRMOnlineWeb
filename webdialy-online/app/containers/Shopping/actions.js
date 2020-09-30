/*
 *
 * Shopping actions
 *
 */

import * as constants from './constants';

export function loadProduct(payload) {
  return {
    type: constants.LOAD_PRODUCT,
    payload,
  };
}
export function loadProductSuccess(payload) {
  return {
    type: constants.LOAD_PRODUCT_SUCCESS,
    payload,
  };
}
export function loadProductError(payload) {
  return {
    type: constants.LOAD_PRODUCT_ERROR,
    payload,
  };
}

export function createItemCart(payload) {
  return {
    type: constants.CREATE_ITEM_CART,
    payload,
  };
}
export function createItemCartSuccess(payload) {
  return {
    type: constants.CREATE_ITEM_CART_SUCCESS,
    payload,
  };
}
export function createItemCartError(payload) {
  return {
    type: constants.CREATE_ITEM_CART_ERROR,
    payload,
  };
}
