/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import profileShippingSaga, { initLoad } from '../saga';
import * as constants from '../constants';

const generator = profileShippingSaga();

describe('profileShippingSaga Saga', () => {
  it('should start task to watch for INIT_LOAD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.INIT_LOAD, initLoad),
    );
  });
});
