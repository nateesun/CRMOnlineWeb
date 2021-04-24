/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import forgotPasswordSaga, { onRequestChangePassword, onSendEmail } from '../saga';
import * as constants from '../constants';

const generator = forgotPasswordSaga();

describe('forgotPasswordSaga Saga', () => {
  it('should start task to watch for REQUEST_PASSWORD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.REQUEST_PASSWORD, onRequestChangePassword),
    );
  });
  it('should start task to watch for SEND_EMAIL', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.SEND_EMAIL, onSendEmail));
  });
});
