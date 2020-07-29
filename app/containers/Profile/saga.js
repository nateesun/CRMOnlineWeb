import { put, select, takeLatest, call } from "redux-saga/effects"
import request from "utils/request"
import { loadProfileSuccess, loadProfileError } from "./actions"
import { LOAD_PROFILE } from './constants'

export function* onLoadProfile(username) {
  try {
    const requestURL = `/api/member/${username}`
    const response = yield call(request, requestURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    yield put(loadProfileSuccess(response))
  } catch (err) {
    yield put(loadProfileError(err))
  }
}

export default function* profileSaga() {
  yield takeLatest(LOAD_PROFILE, onLoadProfile)
}
