import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* initLoad() {
  try {
    const { username } = yield select(selectors.makeSelectProfile());
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/member/${username}`;
    try {
      const response = yield call(request, requestURL, {
        database,
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
    const requestURL = `${constants.publicPath}/api/login`;
    const { mobile, email, new_password } = yield select(selectors.makeSelectEditForm());
    const database = getCookie('database');
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify({
        mobile,
        email,
        new_password
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
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.UPDATE_PASSWORD, onUpdatePassword);
}
