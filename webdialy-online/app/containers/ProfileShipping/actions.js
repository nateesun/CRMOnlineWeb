/*
 *
 * ProfileShipping actions
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

export function editShippingError(payload) {
  return {
    type: constants.EDIT_SHIPPING_ERROR,
    payload,
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

export function initLoadError(payload) {
  return {
    type: constants.INIT_LOAD_ERROR,
    payload,
  };
}

export function changeMapsValue(payload) {
  return {
    type: constants.CHANGE_MAPS_VALUE,
    payload,
  };
}
