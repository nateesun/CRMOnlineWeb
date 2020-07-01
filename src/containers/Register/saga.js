import { put, select, takeLatest } from "redux-saga/effects"
import { ADD_REGISTER_MEMBER } from "./constants"
import { addRegisterMemberSuccess, addRegisterMemberError } from "./actions"

import { makeSelectMember } from "./selectors"

const firebase = require("firebase")
firebase.initializeApp({
  appName: "WebDialy Online",
  serviceAccount: "./service-account.json",
  authDomain: "webdialy-online.firebaseapp.com",
  databaseURL: "https://webdialy-online.firebaseio.com",
  storageBucket: "webdialy-online.appspot.com",
})

export function* onAddRegisterMember() {
  try {
    const member = yield select(makeSelectMember())
    console.log(member)
    const ref = firebase.app().database().ref()
    ref.push(member)
    yield put(addRegisterMemberSuccess())
  } catch (err) {
    yield put(addRegisterMemberError(err))
  }
}

export default function* registerSaga() {
  yield takeLatest(ADD_REGISTER_MEMBER, onAddRegisterMember)
}
