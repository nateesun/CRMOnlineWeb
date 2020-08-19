import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_MEMBERS, DELETE_MEMBER, EDIT_MEMBER } from './constants';
import {
  loadMemberSuccess,
  loadMemberError,
  deleteMemberSuccess,
  deleteMemberError,
} from './actions';

export function* onLoadMembers() {
  try {
    const requestURL = '/api/member';
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(loadMemberSuccess(response));
  } catch (err) {
    yield put(loadMemberError(err));
  }
}
export function* onDeleteMember({ payload }) {
  try {
    const requestURL = '/api/member';
    const response = yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        member_code: payload,
      }),
    });
    yield put(deleteMemberSuccess(response));
  } catch (err) {
    yield put(deleteMemberError(err));
  }
}
export function* onEditMember() {
  try {
    const requestURL = '/api/member';
    const response = yield call(request, requestURL, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    yield put(loadMemberSuccess(response));
  } catch (err) {
    yield put(loadMemberError(err));
  }
}

export default function* membersSaga() {
  yield takeLatest(LOAD_MEMBERS, onLoadMembers);
  yield takeEvery(DELETE_MEMBER, onDeleteMember);
  yield takeEvery(EDIT_MEMBER, onEditMember);
}
