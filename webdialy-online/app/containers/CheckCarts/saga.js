import { call, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import * as loginSelectors from 'containers/Login/selectors';
import * as dashboardSelectors from 'containers/Dashboard/selectors';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* initLoad() {
  try {
    const requestURL = `${constants.publicPath}/api/carts`;
    const database = yield select(loginSelectors.makeSelectDatabase());
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
    const requestURL = `${constants.publicPath}/api/carts/search`;
    const database = yield select(loginSelectors.makeSelectDatabase());
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
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response) {
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
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/carts`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (response) {
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
    const database = yield select(loginSelectors.makeSelectDatabase());
    const requestURL = `${constants.publicPath}/api/carts/${data.uuid_index}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'DELETE',
      body: JSON.stringify(data),
    });
    if (response) {
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
    const requestURL = `${constants.publicPath}/api/carts/shopping_approve`;
    const database = yield select(loginSelectors.makeSelectDatabase());
    const { code } = yield select(dashboardSelectors.makeSelectProfile());
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
    const database = yield select(loginSelectors.makeSelectDatabase());
    yield put(push(`${constants.publicPath}/order_confirm/${data.cart_no}/${database}`));
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
}
