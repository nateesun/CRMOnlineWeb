import { put, select, takeEvery, call } from 'redux-saga/effects';
import { getCookie } from 'react-use-cookie';
import request from 'utils/request';
import * as appConstants from 'containers/App/constants';
import * as constants from './constants';
import * as actions from './actions';
import * as selectors from './selectors';

export function* onEditMember() {
  try {
    const email = JSON.parse(getCookie('token') || '');
    const data = yield select(selectors.makeSelectProfile());
    const database = getCookie('database');
    const requestURL = `${appConstants.publicPath}/api/member/${email}`;
    const response = yield call(request, requestURL, {
      database,
      method: 'PUT',
      body: JSON.stringify(data.profile),
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
  yield takeEvery(constants.EDIT_MEMBER, onEditMember);
}
