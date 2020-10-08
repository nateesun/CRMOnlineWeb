import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { email } = yield select(selects.makeSelectDashboard());
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

export function* loadRedeem() {
  try {
    const requestURL = `${constants.publicPath}/api/redeem`;
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

export function* createRedeemCode() {
  try {
    const { code } = yield select(selects.makeSelectProfile());
    const { uuid_index, product_code } = yield select(selects.makeSelectRedeemPoint());
    const requestURL = `${constants.publicPath}/api/redeem`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        uuid_index,
        product_code,
        member_code_use: code,
      })
    });
    if (response.status === 'Success') {
      yield put(actions.createRedeemSuccess(response.data));
    } else {
      yield put(actions.createRedeemError('Create redeem code error'));
    }
  } catch (err) {
    yield put(actions.createRedeemError(err));
  }
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.LOAD_REDEEM, loadRedeem);
  yield takeEvery(constants.CREATE_REDEEM, createRedeemCode);
}
