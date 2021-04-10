/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import homePageSaga, { initLoad } from '../saga';
import * as constants from '../constants';

const generator = homePageSaga();

describe('homePageSaga Saga', () => {
  it('should start task to watch for INIT_LOAD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.INIT_LOAD, initLoad),
    );
  });
});
