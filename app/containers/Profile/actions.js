import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_ERROR,
} from "./constants"

export function loadProfile(username) {
  return {
    type: LOAD_PROFILE,
    payload: username,
  }
}
export function loadProfileSuccess(payload) {
  return {
    type: LOAD_PROFILE_SUCCESS,
    payload,
  }
}
export function loadProfileError(error) {
  return {
    type: LOAD_PROFILE_ERROR,
    payload: error,
  }
}
