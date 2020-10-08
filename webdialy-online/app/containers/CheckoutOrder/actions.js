/*
 *
 * Checkout actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}
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
export function loadMemberShipping(payload) {
  return {
    type: constants.LOAD_MEMBER_SHIPPING,
    payload,
  };
}
export function loadMemberShippingSuccess(payload) {
  return {
    type: constants.LOAD_MEMBER_SHIPPING_SUCCESS,
    payload,
  };
}
export function loadMemberShippingError(payload) {
  return {
    type: constants.LOAD_MEMBER_SHIPPING_ERROR,
    payload,
  };
}

export function uploadImage(payload) {
  return {
    type: constants.UPLOAD_IMG,
    payload,
  };
}

export function uploadImageSuccess(payload) {
  return {
    type: constants.UPLOAD_IMG_SUCCESS,
    payload,
  };
}

export function uploadImageError(payload) {
  return {
    type: constants.UPLOAD_IMG_ERROR,
    payload,
  };
}

export function setPaymentData(payload) {
  return {
    type: constants.SET_PAYMENT_DATA,
    payload,
  };
}

export function setPaymentDataSuccess(payload) {
  return {
    type: constants.SET_PAYMENT_DATA_SUCCESS,
    payload,
  };
}

export function setPaymentDataError(payload) {
  return {
    type: constants.SET_PAYMENT_DATA_ERROR,
    payload,
  };
}

export function checkSlip(payload) {
  return {
    type: constants.CHECK_SLIP,
    payload,
  };
}

export function checkSlipSuccess(payload) {
  return {
    type: constants.CHECK_SLIP_SUCCESS,
    payload,
  };
}

export function checkSlipError(payload) {
  return {
    type: constants.CHECK_SLIP_ERROR,
    payload,
  };
}

export function deleteItemCart(payload) {
  return {
    type: constants.DELETE_ITEM_CART,
    payload,
  };
}

export function deleteItemCartSuccess(payload) {
  return {
    type: constants.DELETE_ITEM_CART_SUCCESS,
    payload,
  };
}

export function deleteItemCartError(payload) {
  return {
    type: constants.DELETE_ITEM_CART_ERROR,
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
