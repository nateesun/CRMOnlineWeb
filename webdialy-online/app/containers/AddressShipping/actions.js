/*
 *
 * AddressShipping actions
 *
 */

import * as types from './constants';

export function initState() {
  return {
    type: types.INIT_STATE,
  };
}

export function editShipping(payload) {
  return {
    type: types.EDIT_SHIPPING,
    payload,
  };
}

export function editShippingSuccess() {
  return {
    type: types.EDIT_SHIPPING_SUCCESS,
  };
}

export function editShippingError(error) {
  return {
    type: types.EDIT_SHIPPING_ERROR,
    payload: error,
  };
}

export function initLoad(payload) {
  return {
    type: types.INIT_LOAD,
    payload,
  };
}

export function initLoadSuccess(payload) {
  return {
    type: types.INIT_LOAD_SUCCESS,
    payload,
  };
}

export function initLoadError(error) {
  return {
    type: types.INIT_LOAD_ERROR,
    payload: error,
  };
}

export function changeMapsValue(payload) {
  return {
    type: types.CHANGE_MAPS_VALUE,
    payload,
  };
}
