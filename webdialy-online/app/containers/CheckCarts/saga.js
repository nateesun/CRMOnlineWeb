import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* loadProfile() {
  try {
    const email = JSON.parse(getCookie('token')||'');
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/member/${email}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'GET',
    });
    if (response.status === 'Success') {
      yield put(actions.loadProfileSuccess(response.data));
    } else {
      yield put(actions.loadProfileError('Cannot load profile data'));
    }
  } catch (err) {
    yield put(actions.loadProfileError(err));
  }
}

export function* initLoad() {
  try {
    const requestURL = `${appConstants.publicPath}/api/carts`;
    const database = getCookie('database');
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
    const requestURL = `${appConstants.publicPath}/api/carts/search`;
    const database = getCookie('database');
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

export function* saveData() {
  try {
    const data = yield select(selectors.makeSelectForm());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.status==='Success') {
      yield put(actions.createItemSuccess(response));
    } else {
      yield put(actions.createItemError('Cannot create data'));
    }
  } catch (err) {
    yield put(actions.createItemError(err));
  }
}

export function* updateData() {
  try {
    const data = yield select(selectors.makeSelectForm());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (response.status==='Success') {
      yield put(actions.updateItemSuccess(response));
    } else {
      yield put(actions.updateItemError('Cannot update data'));
    }
  } catch (err) {
    yield put(actions.updateItemError(err));
  }
}

export function* deleteData() {
  try {
    const data = yield select(selectors.makeSelectForm());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/carts/${data.uuid_index}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'DELETE',
      body: JSON.stringify(data),
    });
    if (response.status==='Success') {
      yield put(actions.deleteItemSuccess(response));
    } else {
      yield put(actions.deleteItemError('Cannot update data'));
    }
  } catch (err) {
    yield put(actions.deleteItemError(err));
  }
}

export function* onUpdateShoppingStep() {
  try {
    const { cart_no, approve, reason } = yield select(selectors.makeSelectCartStatus());
    const requestURL = `${appConstants.publicPath}/api/carts/shopping_approve`;
    const database = getCookie('database');
    const { code } = yield select(mainSelectors.makeSelectProfile());
    let response = yield call(request, requestURL, {
      database,
      method: 'PATCH',
      body: JSON.stringify({ 
        cart_no, 
        shopping_step: approve, 
        emp_code_update: code,
        emp_reason: reason ,
      }),
    });
    if (response.status === 'Success') {
      yield initLoad();
      yield put(actions.updateShoppingStepSuccess('Finish checkout order step'));
    } else {
      yield put(actions.updateShoppingStepError('Cannot update shopping step'));
    }
  } catch (err) {
    yield put(actions.updateShoppingStepError(err));
  }
}
export function* onLoadViewOrder() {
  try {
    const data = yield select(selectors.makeSelectForm());
    const database = getCookie('database');
    yield put(push(`${appConstants.publicPath}/order_confirm/${data.cart_no}/${database}`));
    yield put(actions.loadViewOrderSuccess('Success'))
  } catch (err) {
    yield put(actions.loadViewOrderError(err));
  }
}

export default function* checkCartsSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.CREATE_ITEM, saveData);
  yield takeEvery(constants.UPDATE_ITEM, updateData);
  yield takeEvery(constants.DELETE_ITEM, deleteData);
  yield takeEvery(constants.SEARCH, searchItem);
  yield takeEvery(constants.UPDATE_SHOPPING_STEP, onUpdateShoppingStep);
  yield takeEvery(constants.LOAD_VIEW_ORDER, onLoadViewOrder);
  yield takeEvery(constants.LOAD_PROFILE, loadProfile);
}
