import { put, select, takeEvery, call } from 'redux-saga/effects';
import request from 'utils/request';
import * as loginSelectors from 'containers/Login/selectors';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* initLoad() {
  try {
    const { member_code } = yield select(selectors.makeSelectAddressShipping());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/shipping/${member_code}`;
    try {
      const response = yield call(request, requestURL, {
        database,
        method: 'GET',
      });
      yield put(actions.initLoadSuccess(response.data[0]));
    } catch (error) {
      yield put(actions.initLoadError(error));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

export function* onEditShipping() {
  try {
    const requestURL = `${constants.publicPath}/api/shipping`;
    const addressData = yield select(selectors.makeSelectAddressData());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(addressData),
    });
    if (response.status === 'Success') {
      yield put(actions.editShippingSuccess());
    } else {
      yield put(actions.editShippingError(response.msg));
    }
  } catch (err) {
    yield put(actions.editShippingError(err));
  }
}

// Individual exports for testing
export default function* addressShippingSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.EDIT_SHIPPING, onEditShipping);
}
