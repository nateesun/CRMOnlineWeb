import { put, select, takeLatest } from "redux-saga/effects"
import { CHECK_LOGIN } from "./constants"
import { checkLoginSuccess, checkLoginError } from "./actions"

import { makeSelectLogin } from "./selectors"
import firebase from '../../config/firebase'

async function validUser(username, password) {
    const ref = firebase.app().database().ref()
    const snapshot = await ref.orderByChild('username').equalTo(username).once("value")
    if (snapshot.val()) {
      return JSON.stringify(snapshot.val()).match(password)
    } else {
      return false
    }
}

export function* onValidLogin() {
  try {
    const loginForm = yield select(makeSelectLogin())
    const { username, password } = loginForm
    const result = yield validUser(username, password)
    if (result) {
      console.log('Found user')
      yield put(checkLoginSuccess())
    } else {
      console.log('Notfound user!')
      yield put(checkLoginError('Not found user'))
    }
  } catch (err) {
    yield put(checkLoginError(err))
  }
}

export default function* loginSaga() {
  yield takeLatest(CHECK_LOGIN, onValidLogin)
}
