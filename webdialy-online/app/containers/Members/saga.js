import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';

export function* onLoadMembers() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
    });
    yield put(actions.loadMemberSuccess(response));
  } catch (err) {
    yield put(actions.loadMemberError("Cannot connect to API Server"));
  }
}
export function* onDeleteMember({ payload }) {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const response = yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
      body: JSON.stringify({
        member_code: payload,
      }),
    });
    yield put(actions.deleteMemberSuccess(response));
  } catch (err) {
    yield put(actions.deleteMemberError("Cannot connect to API Server"));
  }
}
export function* onEditMember() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const response = yield call(request, requestURL, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
    });
    yield put(actions.loadMemberSuccess(response));
  } catch (err) {
    yield put(actions.loadMemberError("Cannot connect to API Server"));
  }
}

export default function* membersSaga() {
  yield takeLatest(types.LOAD_MEMBERS, onLoadMembers);
  yield takeEvery(types.DELETE_MEMBER, onDeleteMember);
  yield takeEvery(types.EDIT_MEMBER, onEditMember);
}
