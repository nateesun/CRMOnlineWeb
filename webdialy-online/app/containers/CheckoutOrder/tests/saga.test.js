/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import checkoutSaga, { loadCartList, loadMemberShipping } from '../saga';
import * as constants from '../constants';

const generator = checkoutSaga();

describe('checkoutSaga Saga', () => {
  it('should start task to watch for LOAD_CART', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_CART, loadCartList));
  });
  it('should start task to watch for LOAD_MEMBER_SHIPPING', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.LOAD_MEMBER_SHIPPING, loadMemberShipping),
    );
  });
});
