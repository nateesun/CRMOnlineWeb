/*
 *
 * ProfileEdit actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}

export function editMember(payload) {
  return {
    type: constants.EDIT_MEMBER,
    payload,
  };
}

export function editMemberSuccess() {
  return {
    type: constants.EDIT_MEMBER_SUCCESS,
  };
}

export function editMemberError(error) {
  return {
    type: constants.EDIT_MEMBER_ERROR,
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
