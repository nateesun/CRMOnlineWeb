/*
 *
 * Shopping actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}
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

export function updateItemCart(payload) {
  return {
    type: constants.UPDATE_ITEM_CART,
    payload,
  };
}
export function updateItemCartSuccess(payload) {
  return {
    type: constants.UPDATE_ITEM_CART_SUCCESS,
    payload,
  };
}
export function updateItemCartError(payload) {
  return {
    type: constants.UPDATE_ITEM_CART_ERROR,
    payload,
  };
}
export function searchProduct(payload) {
  return {
    type: constants.SEARCH_PRODUCT,
    payload,
  };
}
export function searchProductSuccess(payload) {
  return {
    type: constants.SEARCH_PRODUCT_SUCCESS,
    payload,
  };
}
export function searchProductError(payload) {
  return {
    type: constants.SEARCH_PRODUCT_ERROR,
    payload,
  };
}
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
export function loadProfileError(payload) {
  return {
    type: constants.LOAD_PROFILE_ERROR,
    payload,
  };
}
