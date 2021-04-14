/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import authenticationSaga, { loadRole } from '../saga';
import * as constants from '../constants';

const generator = authenticationSaga();

describe('authenticationSaga Saga', () => {
  it('should start task to watch for LOAD_ROLE', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_ROLE, loadRole));
  });
});
