/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import shoppingSaga, { loadProduct } from '../saga';
import * as constants from '../constants';

const generator = shoppingSaga();

describe('shoppingSaga Saga', () => {
  it('should start task to watch for LOAD_PRODUCT', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_PRODUCT, loadProduct));
  });
});
