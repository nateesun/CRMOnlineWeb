/*
 *
 * Profile actions
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
