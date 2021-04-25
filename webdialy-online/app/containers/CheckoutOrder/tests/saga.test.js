/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import checkoutSaga, {
  loadCartList,
  loadMemberShipping,
  loadBranchShipping,
  uploadFile,
  validateSlipUpload,
  onDeleteItemCart,
  onUpdateItemCart,
  onUpdateAddressForm,
  onUpdateCartsBranchShipping,
  onUpdatePaymentForm,
  onUpdateShoppingStep,
  onUpdateSlipPath,
  loadBranchLocation,
} from '../saga';
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
  it('should start task to watch for LOAD_MEMBER_SHIPPING', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.LOAD_MEMBER_SHIPPING, loadBranchShipping),
    );
  });
  it('should start task to watch for UPLOAD_IMG', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPLOAD_IMG, uploadFile));
  });
  it('should start task to watch for CHECK_SLIP', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CHECK_SLIP, validateSlipUpload));
  });
  it('should start task to watch for DELETE_ITEM_CART', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.DELETE_ITEM_CART, onDeleteItemCart));
  });
  it('should start task to watch for UPDATE_ITEM_CART', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPDATE_ITEM_CART, onUpdateItemCart));
  });
  it('should start task to watch for UPDATE_ADDRESS_FORM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_ADDRESS_FORM, onUpdateAddressForm),
    );
  });
  it('should start task to watch for UPDATE_ADDRESS_FORM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_ADDRESS_FORM, onUpdateCartsBranchShipping),
    );
  });
  it('should start task to watch for SET_PAYMENT_DATA', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.SET_PAYMENT_DATA, onUpdatePaymentForm),
    );
  });
  it('should start task to watch for UPDATE_SHOPPING_STEP', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_SHOPPING_STEP, onUpdateShoppingStep),
    );
  });
  it('should start task to watch for UPDATE_SLIP_PATH', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPDATE_SLIP_PATH, onUpdateSlipPath));
  });
  it('should start task to watch for UPDATE_ADDRESS_FORM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_ADDRESS_FORM, loadBranchLocation),
    );
  });
});
