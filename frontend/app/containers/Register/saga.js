import { put, select, takeLatest, call } from "redux-saga/effects"
import request from "utils/request"
import { ADD_REGISTER_MEMBER } from "./constants"
import { addRegisterMemberSuccess, addRegisterMemberError } from "./actions"

import { makeSelectMember } from "./selectors"

const moment = require("moment")

export function* onAddRegisterMember() {
  try {
    const requestURL = "/api/member"
    const member = yield select(makeSelectMember())
    const {
      prefix,
      firstName,
      lastName,
      mobile,
      dateStr,
      username,
      password,
    } = member
    const response = yield call(request, requestURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Member_Code: Math.random().toString(36).substr(2, 9),
        Member_TitleNameThai: prefix,
        Member_FirstName: firstName,
        Member_LastName: lastName,
        Member_HomeTel: mobile,
        Member_Mobile: mobile,
        Member_Email: username,
        Username: username,
        Password: password,
        System_Created: moment().format("YYYY-MM-DD HH:mm:ss"),
        System_Updated: moment().format("YYYY-MM-DD HH:mm:ss"),
        Member_TotalScore: 0,
        Member_TotalPurchase: 0,
        Member_PointExpiredDate: moment().add(10, "years").format("YYYY-MM-DD"),
        Member_ExpiredDate: moment().add(10, "years").format("YYYY-MM-DD"),
        Member_Brithday: dateStr,
      }),
    })
    if (response.status === 'Success') {
      yield put(addRegisterMemberSuccess())
    } else {
      yield put(addRegisterMemberError('Cannot save data !!!'))
    }
  } catch (err) {
    yield put(addRegisterMemberError(err))
  }
}

export default function* registerSaga() {
  yield takeLatest(ADD_REGISTER_MEMBER, onAddRegisterMember)
}