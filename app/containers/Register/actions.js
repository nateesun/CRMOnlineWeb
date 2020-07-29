import {
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_SUCCESS,
  ADD_REGISTER_MEMBER_ERROR,
} from "./constants"

export function addRegisterMember(member) {
  return {
    type: ADD_REGISTER_MEMBER,
    payload: member,
  }
}

export function addRegisterMemberSuccess() {
  return {
    type: ADD_REGISTER_MEMBER_SUCCESS,
  }
}

export function addRegisterMemberError(error) {
  return {
    type: ADD_REGISTER_MEMBER_ERROR,
    payload: error,
  }
}
