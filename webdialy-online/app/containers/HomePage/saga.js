import { put, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';

export function* initLoad() {
  try {
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/company`;
    const response = yield call(request, requestURL, {
      database,
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.initLoadSuccess(response.data[0]));
    } else {
      yield put(actions.initLoadError('Cannot load data'));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

// Individual exports for testing
export default function* homePageSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
}
