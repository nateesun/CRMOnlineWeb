/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import mainLayoutAppSaga, { loadProfile } from '../saga';
import * as constants from '../constants';

const generator = mainLayoutAppSaga();

describe('mainLayoutAppSaga Saga', () => {
  it('should start task to watch for LOAD_PROFILE', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.LOAD_PROFILE, loadProfile),
    );
  });
});
