/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import profileSaga, { onLoadCompany } from '../saga';
import * as constants from '../constants';

const generator = profileSaga();

describe('profileSaga Saga', () => {
  it('should start task to watch for INIT_LOAD_COMPANY', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.INIT_LOAD_COMPANY, onLoadCompany),
    );
  });
});
