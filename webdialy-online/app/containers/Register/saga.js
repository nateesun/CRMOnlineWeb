import { put, select, takeEvery, call } from 'redux-saga/effects';
import moment from 'moment';
import { push } from 'connected-react-router';
import request from 'utils/request';
import * as types from './constants';
import * as actions from './actions';
import { makeSelectMember } from './selectors';

export function* onAddRegisterMember() {
  try {
    const requestURL = `${types.publicPath}/api/member`;
    const data = yield select(makeSelectMember());
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`
      },
      body: JSON.stringify({
        code: '',
        uuid_index: data.uuid_index,
        prefix: data.prefix,
        first_name: data.first_name,
        last_name: data.last_name,
        mobile: data.mobile,
        email: data.email,
        username: data.email,
        password: data.password,
        system_created: moment().format('YYYY-MM-DD HH:mm:ss'),
        system_updated: moment().format('YYYY-MM-DD HH:mm:ss'),
        total_score: 0,
        total_purchase: 0,
        point_expired_date: moment()
          .add(10, 'years')
          .format('YYYY-MM-DD'),
        expired_date: moment()
          .add(10, 'years')
          .format('YYYY-MM-DD'),
        birthday: data.birthday,
        line_id: data.line_id,
      }),
    });
    if (response.status==='Success') {
      yield put(actions.addRegisterMemberSuccess());
      yield put(push(`${types.publicPath}/login`));
    } else {
      yield put(actions.addRegisterMemberError("ไม่สามารถบันทึกข้อมูลได้"));
    }
  } catch (err) {
    yield put(actions.addRegisterMemberError(err));
  }
}

export default function* registerSaga() {
  yield takeEvery(types.ADD_REGISTER_MEMBER, onAddRegisterMember);
}
