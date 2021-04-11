/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import profileChangePwdSaga, { onUpdatePassword } from '../saga';
import * as constants from '../constants';

const generator = profileChangePwdSaga();

describe('profileChangePwdSaga Saga', () => {
  it('should start task to watch for UPDATE_PASSWORD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_PASSWORD, onUpdatePassword),
    );
  });
});
