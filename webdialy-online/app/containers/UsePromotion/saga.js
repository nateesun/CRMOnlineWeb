import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import * as loginSelectors from 'containers/Login/selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* initLoad() {
  try {
    const requestURL = `${constants.publicPath}/api/redeem/list`;
    const database = yield select(loginSelectors.makeSelectDatabase());
    const response = yield call(request, requestURL, {
      database,
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
export function* searchItem({ payload }) {
  const { key, value } = payload;
  try {
    const requestURL = `${constants.publicPath}/api/redeem/search`;
    const database = yield select(loginSelectors.makeSelectDatabase());
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({ key, value }),
    });
    if (response.data) {
      yield put(actions.searchSuccess(response.data));
    } else {
      yield put(actions.searchError('Not found data'));
    }
  } catch (err) {
    yield put(actions.searchError(err));
  }
}

export default function* usePromotionSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.SEARCH, searchItem);
}
