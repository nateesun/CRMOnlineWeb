import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
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

export default function* shoppingSaga() {
  yield takeEvery(constants.LOAD_PRODUCT, loadProduct);
}
