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
