import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* loadRole() {
  try {
    const requestURL = `${appConstants.publicPath}/api/roles_mapping/auth`;
    const database = getCookie('database');
    const { user, uriPath } = yield select(selectors.makeSelectAuthenticationAuth());
    const response = yield call(request, requestURL, {
      database,
      method: 'POST',
      body: JSON.stringify({
        user,
        path: uriPath,
      }),
    });
    yield put(actions.loadRoleSuccess(response.status));
  } catch (err) {
    yield put(actions.loadRoleError(err));
  }
}

// Individual exports for testing
export default function* dashboardSaga() {
  yield takeEvery(constants.LOAD_ROLE, loadRole);
}
