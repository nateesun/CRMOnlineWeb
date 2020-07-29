import { put, select, takeLatest } from "redux-saga/effects"
import { ADD_REGISTER_MEMBER } from "./constants"
import { addRegisterMemberSuccess, addRegisterMemberError } from "./actions"

import { makeSelectMember } from "./selectors"
// import firebase from '../../config/firebase'

const moment = require('moment')

export function* onAddRegisterMember() {
  try {
    const member = yield select(makeSelectMember())
    const { prefix, firstName, lastName, mobile, dateStr, username, password } = member
    // const ref = firebase.app().database().ref('/member')
    // const memberData = {
    //   code: Math.random().toString(36).substr(2, 9),
    //   prefix,
    //   firstName,
    //   lastName,
    //   mobile,
    //   username,
    //   password,
    //   created: moment().format('YYYY-MM-DD HH:mm:ss'),
    //   updated: moment().format('YYYY-MM-DD HH:mm:ss'),
    //   pointBalance: 0,
    //   pointRedemption: 0,
    //   rewardRedemption: 0,
    //   pointExpired: moment().add(10, "years").format("YYYY-MM-DD"),
    //   memberExpiredDate: moment().add(10, "years").format("YYYY-MM-DD"),
    //   dateOfBirth: dateStr,
    // }
    // ref.push(memberData)
    yield put(addRegisterMemberSuccess())
  } catch (err) {
    yield put(addRegisterMemberError(err))
  }
}

export default function* registerSaga() {
  yield takeLatest(ADD_REGISTER_MEMBER, onAddRegisterMember)
}
