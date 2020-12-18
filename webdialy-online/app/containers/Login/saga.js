import { put, select, takeEvery, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* onValidLogin() {
  try {
    const requestURL = `${constants.publicPath}/api/login`;
    const loginForm = yield select(selectors.makeSelectLogin());
    const database = getCookie('database');
    const { email, mobile, password, type } = loginForm;
    const encryptPassword = Buffer.from(password).toString('base64');
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({ email, mobile, password: encryptPassword, type }),
    });
    if (response.status === 'Success') {
      yield put(actions.checkLoginSuccess(response));
      yield put(push(`${constants.publicPath}/dashboard`));
    } else if (response.status === 'Missing Role') {
      yield put(actions.checkLoginError(response.msg));
    } else {
      yield put(actions.checkLoginError('Mobile or Email or password invalid'));
    }
  } catch (err) {
    yield put(actions.checkLoginError(`${err}`));
  }
}

export function* onLogout() {
  try {
    yield put(actions.checkLogoutSuccess());
  } catch (err) {
    yield put(actions.checkLogoutError(err));
  }
}

export default function* loginSaga() {
  yield takeEvery(constants.CHECK_LOGIN, onValidLogin);
  yield takeEvery(constants.CHECK_LOGOUT, onLogout);
}
