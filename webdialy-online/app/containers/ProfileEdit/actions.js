/*
 *
 * ProfileEdit actions
 *
 */

import * as types from './constants';

export function defaultAction() {
  return {
    type: types.DEFAULT_ACTION,
  };
}

export function editMember(payload) {
  return {
    type: types.EDIT_MEMBER,
    payload,
  };
}

export function editMemberSuccess() {
  return {
    type: types.EDIT_MEMBER_SUCCESS,
  };
}

export function editMemberError(error) {
  return {
    type: types.EDIT_MEMBER_ERROR,
    payload: error,
  };
}

export function initLoadProfile(payload) {
  return {
    type: types.INIT_LOAD_PROFILE_MEMBER,
    payload,
  };
}

export function initLoadProfileSuccess(payload) {
  return {
    type: types.INIT_LOAD_PROFILE_MEMBER_SUCCESS,
    payload,
  };
}

export function initLoadProfileError(error) {
  return {
    type: types.INIT_LOAD_PROFILE_MEMBER_ERROR,
    payload: error,
  };
}
