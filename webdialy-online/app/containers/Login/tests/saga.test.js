/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import loginSaga, { onValidLogin, onLogout } from '../saga';
import * as constants from '../constants';

const generator = loginSaga();

describe('loginSaga Saga', () => {
  it('should start task to watch for CHECK_LOGIN', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CHECK_LOGIN, onValidLogin));
  });
  it('should start task to watch for CHECK_LOGOUT', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CHECK_LOGOUT, onLogout));
  });
});
