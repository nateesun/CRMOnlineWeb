import { call, put, takeEvery } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as constants from './constants';
import * as actions from './actions';

export function* loadProfile() {
  try {
    const email = JSON.parse(getCookie('token')||'');
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/member/${email}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.loadProfileSuccess(response.data));
    } else {
      yield put(actions.loadProfileError('Cannot load profile data'));
    }
  } catch (err) {
    yield put(actions.loadProfileError(err));
  }
}

export function* initLoad() {
  try {
    const requestURL = `${appConstants.publicPath}/api/database_config`;
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    if (response.data) {
      yield put(actions.initLoadSuccess(response.data));
    } else {
      yield put(actions.initLoadError('Not found data'));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

export default function* databaseConfigSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.LOAD_PROFILE, loadProfile);
}
