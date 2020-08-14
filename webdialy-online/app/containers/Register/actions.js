/*
 *
 * Register actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_SUCCESS,
  ADD_REGISTER_MEMBER_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function addRegisterMember(payload) {
  return {
    type: ADD_REGISTER_MEMBER,
    payload: payload,
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
