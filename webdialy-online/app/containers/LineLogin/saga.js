import { put, takeEvery, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { checkLoginSuccess, checkLoginError } from 'containers/Login/actions';
import * as loginSelectors from 'containers/Login/selectors';
import * as constants from './constants';

export function* onVerifyTokenLogin(data) {
  try {
    // verify token for username, password
    const { token } = data.payload;
    const reqURL = `${constants.publicPath}/api/line/login`;
    const database = yield select(loginSelectors.makeSelectDatabase());
    const responseToken = yield call(request, reqURL, {
      database,
      method: 'POST',
      body: JSON.stringify({ token }),
    });
    if (responseToken.status === 'Success') {
      // send to login api
      const { Username, Password } = responseToken.data;
      const requestURL = `${constants.publicPath}/api/member/login`;
      const response = yield call(request, requestURL, {
        method: 'POST',
        body: JSON.stringify({
          email: Username,
          password: Buffer.from(Password, 'base64').toString(),
        }),
      });
      if (response.status === 'Success') {
        yield put(checkLoginSuccess(response));
        yield put(push(`${constants.publicPath}/dashboard`));
      } else {
        yield put(checkLoginError('Email or password invalid'));
      }
    } else {
      yield put(checkLoginError('Invalid token or expired'));
    }
  } catch (err) {
    yield put(checkLoginError(err));
  }
}

export default function* lineLoginSaga() {
  yield takeEvery(constants.VERIFY_TOKEN, onVerifyTokenLogin);
}
