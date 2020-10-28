import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';

export function* initLoad() {
  try {
    const requestURL = `${constants.publicPath}/api/database_config`;
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
}
