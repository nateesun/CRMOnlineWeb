import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { email } = yield select(selects.makeSelectProfile());
    const requestURL = `${constants.publicPath}/api/member/${email}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.initLoadSuccess(response.data));
    } else {
      yield put(actions.initLoadError('Cannot load data'));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

// Individual exports for testing
export default function* profileSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
}
