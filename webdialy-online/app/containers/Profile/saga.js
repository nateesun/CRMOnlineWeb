import { put, select, takeLatest, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import { makeSelectMember } from './selectors';

export function* onEditMember() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const member = yield select(makeSelectMember());
    const {
      code,
      prefix,
      firstName,
      lastName,
      mobile,
      dateOfBirth,
      lineId,
    } = member;
    yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
      body: JSON.stringify({
        Member_Code: code,
        Member_TitleNameThai: prefix,
        Member_FirstName: firstName,
        Member_LastName: lastName,
        Member_HomeTel: mobile,
        Member_Mobile: mobile,
        Member_Brithday: dateOfBirth,
        Line_Id: lineId,
      }),
    });
    yield put(actions.editMemberSuccess);
  } catch (err) {
    yield put(actions.editMemberError("Cannot connect to API Server: "+err));
  }
}

export default function* profileSaga() {
  yield takeLatest(types.EDIT_MEMBER, onEditMember);
}
