import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* onUpdatePassword() {
  try {
    const requestURL = `${appConstants.publicPath}/api/login`;
    const { mobile, email, new_password: newPassword } = yield select(
      selectors.makeSelectEditForm(),
    );
    const database = getCookie('database');
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify({
        mobile,
        email,
        new_password: newPassword,
      }),
    });
    if (response.status === 'Success') {
      yield put(actions.updatePasswordSuccess());
    } else {
      yield put(actions.updatePasswordError(response.msg));
    }
  } catch (err) {
    yield put(actions.updatePasswordError(err));
  }
}

// Individual exports for testing
export default function* profileChangePwdSaga() {
  yield takeEvery(constants.UPDATE_PASSWORD, onUpdatePassword);
}
