import { call, put, takeEvery, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* loadProduct() {
  try {
    const requestURL = `${constants.publicPath}/api/product`;
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    if (response.data) {
      yield put(actions.loadProductSuccess(response.data));
    } else {
      yield put(actions.loadProductError('Not found data'));
    }
  } catch (err) {
    yield put(actions.loadProductError(err));
  }
}

export function* saveCartItem() {
  try {
    const data = yield select(selectors.makeSelectItemCart());
    const requestURL = `${constants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response) {
      yield put(actions.createItemCartSuccess(response.data));
    } else {
      yield put(actions.createItemCartError('Cannot create data'));
    }
  } catch (err) {
    yield put(actions.createItemCartError(err));
  }
}

export default function* shoppingSaga() {
  yield takeEvery(constants.LOAD_PRODUCT, loadProduct);
  yield takeEvery(constants.CREATE_ITEM_CART, saveCartItem);
}
