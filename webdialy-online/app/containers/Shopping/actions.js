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
