import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* loadProduct() {
  try {
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/product`;
    const response = yield call(request, requestURL, {
      database,
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
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.status==='Success') {
      yield put(actions.createItemCartSuccess(response.data[0]));
    } else {
      yield put(actions.createItemCartError('Cannot create data'));
    }
  } catch (err) {
    yield put(actions.createItemCartError(err));
  }
}

export function* updateCartItem() {
  try {
    const data = yield select(selectors.makeSelectItemCart());
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (response.status==='Success') {
      yield put(actions.updateItemCartSuccess(response.data));
    } else {
      yield put(actions.updateItemCartError('Cannot create data'));
    }
  } catch (err) {
    yield put(actions.updateItemCartError(err));
  }
}

export function* searchProduct() {
  try {
    const database = getCookie('database');
    const { data } = yield select(selectors.makeSelectSearchData());
    const requestURL = `${constants.publicPath}/api/product/search/${data||'no_data'}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'GET',
    });
    if (response.data) {
      yield put(actions.searchProductSuccess(response.data));
    } else {
      yield put(actions.searchProductError('Not found data'));
    }
  } catch (err) {
    yield put(actions.searchProductError(err));
  }
}

export default function* shoppingSaga() {
  yield takeEvery(constants.LOAD_PRODUCT, loadProduct);
  yield takeEvery(constants.CREATE_ITEM_CART, saveCartItem);
  yield takeEvery(constants.UPDATE_ITEM_CART, updateCartItem);
  yield takeEvery(constants.SEARCH_PRODUCT, searchProduct);
}
