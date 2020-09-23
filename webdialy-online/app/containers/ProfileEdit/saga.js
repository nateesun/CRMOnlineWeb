import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as loginActions from './actions';
import * as selects from './selectors';

export function* initLoadProfileMember() {
  try {
    const { member } = yield select(selects.makeSelectProfileEdit());
    const { code } = member;
    if(code){
      const requestURL = `${types.publicPath}/api/member/${code}`;
      try {
        const response = yield call(request, requestURL, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`,
          },
        });
        yield put(actions.initLoadProfileSuccess(response.data));
      } catch (error) {
        yield put(actions.initLoadProfileError(error));
      }
    }
  } catch (err) {
    yield put(actions.initLoadProfileError(err));
  }
}

export function* onEditMember() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const member = yield select(selects.makeSelectMember());
    const {
      code,
      prefix,
      firstName,
      lastName,
      mobile,
      birthday,
      lineId,
    } = member;
    const response = yield call(request, requestURL, {
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
        Member_Brithday: birthday,
        Line_Id: lineId,
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.editMemberSuccess());
    } else {
      yield put(actions.editMemberError(response.msg));  
    }
  } catch (err) {
    yield put(actions.editMemberError(err));
  }
}

// Individual exports for testing
export default function* profileEditSaga() {
  yield takeEvery(types.INIT_LOAD_PROFILE_MEMBER, initLoadProfileMember);
  yield takeEvery(types.EDIT_MEMBER, onEditMember);
}
