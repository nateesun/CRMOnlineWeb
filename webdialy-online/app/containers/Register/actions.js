/*
 *
 * Register actions
 *
 */

import {
  INIT_STATE,
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_SUCCESS,
  ADD_REGISTER_MEMBER_ERROR,
} from './constants';

export function initState() {
  return {
    type: INIT_STATE,
  };
}
export function addRegisterMember(payload) {
  return {
    type: ADD_REGISTER_MEMBER,
    payload,
  };
}

export function addRegisterMemberSuccess() {
  return {
    type: ADD_REGISTER_MEMBER_SUCCESS,
  };
}

export function addRegisterMemberError(error) {
  return {
    type: ADD_REGISTER_MEMBER_ERROR,
    payload: error,
  };
}
