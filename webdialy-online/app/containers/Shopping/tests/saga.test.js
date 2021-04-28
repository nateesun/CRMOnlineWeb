/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import shoppingSaga, { loadProduct, saveCartItem, updateCartItem, searchProduct } from '../saga';
import * as constants from '../constants';

const generator = shoppingSaga();

describe('shoppingSaga Saga', () => {
  it('should start task to watch for LOAD_PRODUCT', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_PRODUCT, loadProduct));
  });
  it('should start task to watch for CREATE_ITEM_CART', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CREATE_ITEM_CART, saveCartItem));
  });
  it('should start task to watch for UPDATE_ITEM_CART', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPDATE_ITEM_CART, updateCartItem));
  });
  it('should start task to watch for SEARCH_PRODUCT', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.SEARCH_PRODUCT, searchProduct));
  });
});
