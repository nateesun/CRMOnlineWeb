import { call, put, takeEvery, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* loadCartList() {
  try {
    const cart_no = yield select(selectors.makeSelectCartsNo());
    const requestURL = `${constants.publicPath}/api/carts/${cart_no}`;
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    if (response.data) {
      yield put(actions.loadCartSuccess(response.data));
    } else {
      yield put(actions.loadCartError('Not found carts'));
    }
  } catch (err) {
    yield put(actions.loadCartError(err));
  }
}

export default function* checkoutSaga() {
  yield takeEvery(constants.LOAD_CART, loadCartList);
}
