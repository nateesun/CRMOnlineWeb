import { call, put, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* onLoadMembers() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const response = yield call(request, requestURL, {
      method: 'GET'
    });
    if(response.status === 'Success'){
      yield put(actions.loadMemberSuccess(response.data));
    }else{
      yield put(actions.loadMemberError("ไม่สามารถโหลดข้อมูลได้"));
    }
  } catch (err) {
    yield put(actions.loadMemberError(err));
  }
}
export function* onDeleteMember({ payload }) {
  try {
    const requestURL = `${types.publicPath}/api/member/${payload}`;
    const response = yield call(request, requestURL, {
      method: 'DELETE',
    });
    if(response.status==='Success'){
      yield put(actions.deleteMemberSuccess(response));
    }else{
      yield put(actions.deleteMemberError('ไม่สามารถบันทึกข้อมูลได้'));  
    }
  } catch (err) {
    yield put(actions.deleteMemberError(err));
  }
}
export function* onEditMember() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const response = yield call(request, requestURL, {
      method: 'PATCH',
    });
    yield put(actions.loadMemberSuccess(response));
  } catch (err) {
    yield put(actions.loadMemberError(err));
  }
}

export default function* membersSaga() {
  yield takeEvery(types.LOAD_MEMBERS, onLoadMembers);
  yield takeEvery(types.DELETE_MEMBER, onDeleteMember);
  yield takeEvery(types.EDIT_MEMBER, onEditMember);
}
