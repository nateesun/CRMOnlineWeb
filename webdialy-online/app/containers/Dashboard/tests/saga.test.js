/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import dashboardSaga, { loadRedeem, createRedeemCode } from '../saga';
import * as constants from '../constants';

const generator = dashboardSaga();

describe('dashboardSaga Saga', () => {
  it('should start task to watch for LOAD_REDEEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_REDEEM, loadRedeem));
  });
  it('should start task to watch for CREATE_REDEEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CREATE_REDEEM, createRedeemCode));
  });
});
