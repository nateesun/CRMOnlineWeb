/*
 *
 * Dashboard actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function loadRedeem(payload) {
  return {
    type: constants.LOAD_REDEEM,
    payload,
  };
}
export function loadRedeemSuccess(payload) {
  return {
    type: constants.LOAD_REDEEM_SUCCESS,
    payload,
  };
}
export function loadRedeemError(payload) {
  return {
    type: constants.LOAD_REDEEM_ERROR,
    payload,
  };
}

export function createRedeem(payload) {
  return {
    type: constants.CREATE_REDEEM,
    payload,
  };
}
export function createRedeemSuccess(payload) {
  return {
    type: constants.CREATE_REDEEM_SUCCESS,
    payload,
  };
}
export function createRedeemError(payload) {
  return {
    type: constants.CREATE_REDEEM_ERROR,
    payload,
  };
}
