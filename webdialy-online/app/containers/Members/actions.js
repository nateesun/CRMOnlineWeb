/*
 *
 * Members actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_MEMBERS,
  LOAD_MEMBERS_SUCCESS,
  LOAD_MEMBERS_ERROR,
  DELETE_MEMBER,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_ERROR,
  EDIT_MEMBER,
  EDIT_MEMBER_SUCCESS,
  EDIT_MEMBER_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function loadMembers() {
  return {
    type: LOAD_MEMBERS,
  };
}
export function loadMemberSuccess(payload) {
  return {
    type: LOAD_MEMBERS_SUCCESS,
    payload,
  };
}
export function loadMemberError(payload) {
  return {
    type: LOAD_MEMBERS_ERROR,
    payload,
  };
}
export function deleteMember(payload) {
  return {
    type: DELETE_MEMBER,
    payload,
  };
}
export function deleteMemberSuccess(payload) {
  return {
    type: DELETE_MEMBER_SUCCESS,
    payload,
  };
}
export function deleteMemberError(payload) {
  return {
    type: DELETE_MEMBER_ERROR,
    payload,
  };
}

export function editMember(member) {
  return {
    type: EDIT_MEMBER,
    payload: member,
  };
}
export function editMemberSuccess(payload) {
  return {
    type: EDIT_MEMBER_SUCCESS,
    payload,
  };
}
export function editMemberError(payload) {
  return {
    type: EDIT_MEMBER_ERROR,
    payload,
  };
}
