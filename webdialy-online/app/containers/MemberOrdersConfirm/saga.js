import { call, put, select, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export function* onValidLogin() {
  try {
    const requestURL = `${constants.publicPath}/api/login`;
    const loginForm = yield select(selectors.makeSelectData());
    const { email, database, password, cart_no } = loginForm;
    const encryptPassword = Buffer.from(password).toString('base64');
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({ email, password: encryptPassword, cart_no, type: 'confirm_order' }),
    });
    if (response.status === 'Success') {
      yield put(actions.loginToConfirmSuccess(response.data));
    } else if (response.status === 'Missing Role') {
      yield put(actions.loginToConfirmError(response.msg));
    } else {
      yield put(actions.loginToConfirmError('Email or password invalid'));
    }
  } catch (err) {
    yield put(actions.loginToConfirmError(`${err}`));
  }
}

export default function* memberOrdersConfirmSaga() {
  yield takeEvery(constants.LOGIN_TO_CONFIRM, onValidLogin);
}
