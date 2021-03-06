import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

const fetch = require('node-fetch');
const loc = window.location.href.split('/');
const apiServiceHost = `${loc[0]}//${loc[2]}`.replace('3000', '5000');

export function* saveDataImport() {
  try {
    const productImports = yield select(selectors.makeSelectProductImport());
    const productImportHeaders = yield select(selectors.makeSelectProductImportHeader());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/product/save_list`;
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({
        headers: productImportHeaders,
        data: productImports,
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.saveDataImportSuccess(response));
    } else {
      yield put(actions.saveDataImportError('Cannot create data'));
    }
  } catch (err) {
    yield put(actions.saveDataImportError(err));
  }
}

export function* initLoad() {
  try {
    const requestURL = `${appConstants.publicPath}/api/product`;
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

export function* saveData() {
  try {
    const data = yield select(selectors.makeSelectForm());
    const file = yield select(selectors.makeSelectFileUpload());
    let imagePath = '';
    if (file) {
      imagePath = `/images/${file.name}`;
    }
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/product`;
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({ ...data, img_path: imagePath }),
    });
    if (response.status === 'Success') {
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
    const requestURL = `${appConstants.publicPath}/api/product`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (response.status === 'Success') {
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
    const requestURL = `${appConstants.publicPath}/api/product/${data.uuid_index}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'DELETE',
      body: JSON.stringify(data),
    });
    if (response.status === 'Success') {
      yield put(actions.deleteItemSuccess(response));
    } else {
      yield put(actions.deleteItemError('Cannot update data'));
    }
  } catch (err) {
    yield put(actions.deleteItemError(err));
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
    };
    const response = yield fetch(`${apiServiceHost}/api/upload`, options).then(resp => resp.json());
    if (response.status === 'Success') {
      yield put(actions.uploadImageSuccess(response));
    } else {
      yield put(actions.uploadImageError('Cannot update data'));
    }
  } catch (err) {
    yield put(actions.uploadImageError(err));
  }
}

export default function* msProductSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.CREATE_ITEM, saveData);
  yield takeEvery(constants.UPDATE_ITEM, updateData);
  yield takeEvery(constants.DELETE_ITEM, deleteData);
  yield takeEvery(constants.UPLOAD_IMG, uploadFile);
  yield takeEvery(constants.SAVE_DATA_IMPORT, saveDataImport);
}
