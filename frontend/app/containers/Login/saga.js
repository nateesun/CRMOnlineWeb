import { put, select, takeLatest, call } from "redux-saga/effects"
import request from "utils/request"
import { CHECK_LOGIN, CHECK_LOGOUT } from "./constants"
import {
  checkLoginSuccess,
  checkLoginError,
  checkLogoutSuccess,
  checkLogoutError,
} from "./actions"

import { makeSelectLogin } from "./selectors"

export function* onValidLogin() {
  try {
    const requestURL = "/api/member/login"
    const loginForm = yield select(makeSelectLogin())
    const { username, password } = loginForm
    const response = yield call(request, requestURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    if (response.status === 'Success') {
      yield put(checkLoginSuccess(response))
    } else {
      yield put(checkLoginError("Username or password invalid"))
    }
  } catch (err) {
    yield put(checkLoginError(err))
  }
}

export function* onLogout() {
  try {
    yield put(checkLogoutSuccess())
  } catch (err) {
    yield put(checkLogoutError())
  }
}

export default function* loginSaga() {
  yield takeLatest(CHECK_LOGIN, onValidLogin)
  yield takeLatest(CHECK_LOGOUT, onLogout)
}
