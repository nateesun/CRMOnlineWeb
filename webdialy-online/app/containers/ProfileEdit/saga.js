import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { email } = yield select(selects.makeSelectProfile());
    const requestURL = `${constants.publicPath}/api/member/${email}`;
    try {
      const response = yield call(request, requestURL, {
        method: 'GET',
      });
      yield put(actions.initLoadSuccess(response.data));
    } catch (error) {
      yield put(actions.initLoadError(error));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

export function* onEditMember() {
  try {
    const requestURL = `${constants.publicPath}/api/member`;
    const profile = yield select(selects.makeSelectProfile());
    const response = yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify(profile.data),
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
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.EDIT_MEMBER, onEditMember);
}
