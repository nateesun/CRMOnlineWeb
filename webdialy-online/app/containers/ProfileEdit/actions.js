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

export function editMemberError(payload) {
  return {
    type: constants.EDIT_MEMBER_ERROR,
    payload,
  };
}
