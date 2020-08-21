import { put, select, takeLatest, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import * as selects from './selectors';

export function* onValidLogin() {
  try {
    const requestURL = '/api/member/login';
    const loginForm = yield select(selects.makeSelectLogin());
    const { email, password } = loginForm;
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.checkLoginSuccess(response));
      yield put(push('/dashboard'));
    } else {
      yield put(actions.checkLoginError('Email or password invalid'));
    }
  } catch (err) {
    yield put(actions.checkLoginError(err));
  }
}

export function* onLogout() {
  try {
    yield put(actions.checkLogoutSuccess());
  } catch (err) {
    yield put(actions.checkLogoutError());
  }
}

export default function* loginSaga() {
  yield takeLatest(types.CHECK_LOGIN, onValidLogin);
  yield takeLatest(types.CHECK_LOGOUT, onLogout);
}
