import { put, select, takeLatest, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* initLoad() {
  try {
    const { memberCode } = yield select(selects.makeSelectDashboard());
    const requestURL = `${types.publicPath}/api/member/${memberCode}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`,
      },
    });
    yield put(actions.initLoadSuccess(response));
  } catch (err) {
    yield put(actions.initLoadError("Cannot connect to API Server"));
  }
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield takeLatest(types.INIT_LOAD, initLoad);
}
