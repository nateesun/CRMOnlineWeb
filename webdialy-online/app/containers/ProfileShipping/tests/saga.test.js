/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import profileShippingSaga, { initLoad, onEditShipping } from '../saga';
import * as constants from '../constants';

const generator = profileShippingSaga();

describe('profileShippingSaga Saga', () => {
  it('should start task to watch for INIT_LOAD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.INIT_LOAD, initLoad));
  });
  it('should start task to watch for EDIT_SHIPPING', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.EDIT_SHIPPING, onEditShipping));
  });
});
