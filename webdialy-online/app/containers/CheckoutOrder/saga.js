import { call, put, takeEvery, select } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

const fetch = require('node-fetch');
const host_upload = 'http://localhost:5000';

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

export function* loadMemberShipping() {
  try {
    const member_code = yield select(selectors.makeSelectMemberCode());
    const requestURL = `${constants.publicPath}/api/shipping/${member_code}`;
    const response = yield call(request, requestURL, {
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
    const response = yield fetch(`${host_upload}/api/upload`, options)
      .then(response => response.json())
      .catch(error => console.log('error', error));
    if (response.status === 'Success') {
      yield put(actions.uploadImageSuccess(response));
    } else {
      yield put(actions.uploadImageError('Cannot update data'));
    }
  } catch (err) {
    console.log('upload file:', err);
    yield put(actions.uploadImageError(err));
  }
}

export default function* checkoutSaga() {
  yield takeEvery(constants.LOAD_CART, loadCartList);
  yield takeEvery(constants.LOAD_MEMBER_SHIPPING, loadMemberShipping);
  yield takeEvery(constants.UPLOAD_IMG, uploadFile);
}
