import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* initLoadProfile() {
  try {
    const email = JSON.parse(getCookie('token')||'');
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/member/${email}`;
    try {
      const response = yield call(request, requestURL, {
        database,
        method: 'GET',
      });
      yield put(actions.initLoadProfileSuccess(response.data));
    } catch (error) {
      yield put(actions.initLoadProfileError(error));
    }
  } catch (err) {
    yield put(actions.initLoadProfileError(err));
  }
}

export function* initLoad() {
  try {
    const { member_code } = yield select(selectors.makeSelectProfileShipping());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/shipping/${member_code}`;
    try {
      const response = yield call(request, requestURL, {
        database,
        method: 'GET',
      });
      console.log('saga:', response);
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
    const requestURL = `${appConstants.publicPath}/api/shipping`;
    const addressData = yield select(selectors.makeSelectAddressData());
    const database = getCookie('database');
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
export default function* profileShippingSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.INIT_LOAD_PROFILE, initLoadProfile);
  yield takeEvery(constants.EDIT_SHIPPING, onEditShipping);
}
