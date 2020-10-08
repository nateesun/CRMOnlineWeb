import { call, put, takeEvery, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as loginSelectors from 'containers/Login/selectors';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

const fetch = require('node-fetch');

export function* loadCartList() {
  try {
    const cart_no = yield select(selectors.makeSelectCartsNo());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/carts/${cart_no}`;
    const response = yield call(request, requestURL, {
      database,
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

export function* loadMemberShipping() {
  try {
    const member_code = yield select(selectors.makeSelectMemberCode());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/shipping/${member_code}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'GET',
    });
    if (response.data) {
      yield put(actions.loadMemberShippingSuccess(response.data[0]));
    } else {
      yield put(actions.loadMemberShippingError('Not found member shipping'));
    }
  } catch (err) {
    yield put(actions.loadMemberShippingError(err));
  }
}

export function* uploadFile() {
  try {
    const file = yield select(selectors.makeSelectFileUpload());
    const formdata = new FormData();
    formdata.append('file', file, file.name);
    const options = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }
    const response = yield fetch(`${constants.apiHostService}/api/upload`, options)
      .then(response => response.json())
      .catch(error => console.log('error', error));
    if (response.status === 'Success') {
      yield put(actions.uploadImageSuccess(response));
    } else {
      yield put(actions.uploadImageError('Cannot update data'));
    }
  } catch (err) {
    yield put(actions.uploadImageError(err));
  }
}

export function* validateSlipUpload() {
  try {
    const img_file = yield select(selectors.makeSelectSlipFile());
    const requestURL = `${constants.publicPath}/api/validate_slip`;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({img_file: ''+img_file}),
    });
    if (response.data) {
      yield put(actions.checkSlipSuccess(response.data));
    } else {
      yield put(actions.checkSlipError('Image uploaded is invalid'));
    }
  } catch (err) {
    yield put(actions.checkSlipError(err));
  }
}

export function* onDeleteItemCart() {
  try {
    const cart_no = yield select(selectors.makeSelectCartsNo());
    const { product_code } = yield select(selectors.makeSelectProduct());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/carts_detail`;
    let response = yield call(request, requestURL, {
      database,
      method: 'DELETE',
      body: JSON.stringify({ cart_no, product_code }),
    });
    if (response.status === 'Success') {
      yield loadCartList();
    } else {
      yield put(actions.deleteItemCartError('Delete item cart success'));
    }
  } catch (err) {
    yield put(actions.deleteItemCartError(err));
  }
}

export function* onUpdateItemCart() {
  try {
    const cart_no = yield select(selectors.makeSelectCartsNo());
    const database = yield select(loginSelectors.makeSelectDatabase());
    const { product_code, qty } = yield select(selectors.makeSelectProduct());
    const requestURL = `${constants.publicPath}/api/carts_detail`;
    let response = yield call(request, requestURL, {
      database,
      method: 'PATCH',
      body: JSON.stringify({ cart_no, product_code, qty }),
    });
    if (response.status === 'Success') {
      yield loadCartList();
    } else {
      yield put(actions.updateItemCartError('Update item cart success'));
    }
  } catch (err) {
    yield put(actions.updateItemCartError(err));
  }
}

export default function* checkoutSaga() {
  yield takeEvery(constants.LOAD_CART, loadCartList);
  yield takeEvery(constants.LOAD_MEMBER_SHIPPING, loadMemberShipping);
  yield takeEvery(constants.UPLOAD_IMG, uploadFile);
  yield takeEvery(constants.CHECK_SLIP, validateSlipUpload);
  yield takeEvery(constants.DELETE_ITEM_CART, onDeleteItemCart);
  yield takeEvery(constants.UPDATE_ITEM_CART, onUpdateItemCart);
}
