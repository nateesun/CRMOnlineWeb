import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { email } = yield select(selects.makeSelectDashboard());
    const requestURL = `${types.publicPath}/api/member/${email}`;
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

export function* loadRedeem() {
  try {
    const requestURL = `${types.publicPath}/api/redeem`;
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.loadRedeemSuccess(response.data));
    } else {
      yield put(actions.loadRedeemError('Not found data'));
    }
  } catch (err) {
    yield put(actions.loadRedeemError(err));
  }
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield takeEvery(types.INIT_LOAD, initLoad);
  yield takeEvery(types.LOAD_REDEEM, loadRedeem);
}
