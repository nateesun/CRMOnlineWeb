import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { email } = yield select(selects.makeSelectProfile());
    const requestURL = `${types.publicPath}/api/member/${email}`;
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

export function* onUpdatePassword() {
  try {
    const requestURL = `${types.publicPath}/api/login`;
    const profile = yield select(selects.makeSelectProfile());
    const response = yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({
        username: profile.data.email,
        password: profile.data.new_password,
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.updatePasswordSuccess());
    } else {
      yield put(actions.updatePasswordError(response.msg));
    }
  } catch (err) {
    yield put(actions.updatePasswordError(err));
  }
}

// Individual exports for testing
export default function* profileChangePwdSaga() {
  yield takeEvery(types.INIT_LOAD, initLoad);
  yield takeEvery(types.UPDATE_PASSWORD, onUpdatePassword);
}
