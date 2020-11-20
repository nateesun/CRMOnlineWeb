import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* initLoad() {
  try {
    const email = JSON.parse(getCookie('token')||'');
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/member/${email}`;
    try {
      const response = yield call(request, requestURL, {
        database,
        method: 'GET',
      });
      yield put(actions.initLoadSuccess(response.data));
    } catch (error) {
      yield put(actions.initLoadError(error));
    }
  } catch (err) {
    yield put(actions.initLoadError(err));
  }
}

export function* onEditMember() {
  try {
    const email = JSON.parse(getCookie('token')||'');
    const profile = yield select(selectors.makeSelectProfile());
    const database = getCookie('database');
    const requestURL = `${constants.publicPath}/api/member/${email}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(profile.data),
    });
    if (response.status === 'Success') {
      yield put(actions.editMemberSuccess());
    } else {
      yield put(actions.editMemberError(response.msg));
    }
  } catch (err) {
    yield put(actions.editMemberError(err));
  }
}

// Individual exports for testing
export default function* profileEditSaga() {
  yield takeEvery(constants.INIT_LOAD, initLoad);
  yield takeEvery(constants.EDIT_MEMBER, onEditMember);
}
