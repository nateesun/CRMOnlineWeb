/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import lineLoginSaga, { onVerifyTokenLogin } from '../saga';
import * as constants from '../constants';

const generator = lineLoginSaga();

describe('lineLoginSaga Saga', () => {
  it('should start task to watch for VERIFY_TOKEN', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.VERIFY_TOKEN, onVerifyTokenLogin));
  });
});
