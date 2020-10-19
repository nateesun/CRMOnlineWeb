/*
 *
 * Profile actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
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
    error,
  };
}

export function initLoadCompany(payload) {
  return {
    type: constants.INIT_LOAD_COMPANY,
    payload,
  };
}
export function initLoadCompanySuccess(payload) {
  return {
    type: constants.INIT_LOAD_COMPANY_SUCCESS,
    payload,
  };
}
export function initLoadCompanyError(payload) {
  return {
    type: constants.INIT_LOAD_COMPANY_ERROR,
    payload,
  };
}
