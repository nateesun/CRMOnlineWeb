/*
 *
 * Register actions
 *
 */

import * as constants from './constants';

export function initState() {
  return {
    type: constants.INIT_STATE,
  };
}
export function addRegisterMember(payload) {
  return {
    type: constants.ADD_REGISTER_MEMBER,
    payload,
  };
}

export function addRegisterMemberSuccess() {
  return {
    type: constants.ADD_REGISTER_MEMBER_SUCCESS,
  };
}

export function addRegisterMemberError(payload) {
  return {
    type: constants.ADD_REGISTER_MEMBER_ERROR,
    payload,
  };
}
