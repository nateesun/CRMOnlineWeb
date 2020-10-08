/*
 *
 * AddressShipping actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function editShipping(payload) {
  return {
    type: constants.EDIT_SHIPPING,
    payload,
  };
}

export function editShippingSuccess() {
  return {
    type: constants.EDIT_SHIPPING_SUCCESS,
  };
}

export function editShippingError(error) {
  return {
    type: constants.EDIT_SHIPPING_ERROR,
    payload: error,
  };
}

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

export function initLoadError(error) {
  return {
    type: constants.INIT_LOAD_ERROR,
    payload: error,
  };
}

export function changeMapsValue(payload) {
  return {
    type: constants.CHANGE_MAPS_VALUE,
    payload,
  };
}
