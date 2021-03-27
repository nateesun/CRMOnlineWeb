import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* initLoad() {
  try {
    const { cart_no, database } = yield select(selectors.makeSelectData());
    const requestURL = `${appConstants.publicPath}/api/orders/confirm_order/${cart_no}`;
    const dbFromLogin = getCookie('database');
    const dbFromUrl = database || dbFromLogin;
    const response = yield call(request, requestURL, {
      database: dbFromUrl,
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.initLoadSuccess(response.data));
    }
  } catch (err) {
    yield put(actions.initLoadError(`${err}`));
  }
}

export function* onApproveConfirmOrder() {
  try {
    const requestURL = `${appConstants.publicPath}/api/orders`;
    const { database } = yield select(selectors.makeSelectData());
    const { 
      order_no,
      member_code_update, 
      member_remark, 
      signature,
      order_status,
      member_mobile
    } = yield select(selectors.makeSelectConfirmData());
    const response = yield call(request, requestURL, {
      database,
      method: 'PATCH',
      body: JSON.stringify({ 
        order_no,
        member_code_update, 
        member_remark, 
        signature,
        order_status,
        member_mobile
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.confirmOrderSuccess(response.data));
    } else {
      yield put(actions.confirmOrderError('Email or password invalid'));
    }
  } catch (err) {
    yield put(actions.confirmOrderError(`${err}`));
  }
}

export default function* memberOrdersConfirmSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.CONFIRM_ORDERS, onApproveConfirmOrder);
}
