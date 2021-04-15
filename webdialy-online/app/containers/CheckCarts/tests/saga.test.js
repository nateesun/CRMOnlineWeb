/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import checkCartsSaga, {
  initLoad,
  saveData,
  updateData,
  deleteData,
  searchItem,
  onUpdateShoppingStep,
  onLoadViewOrder,
} from '../saga';
import * as constants from '../constants';

const generator = checkCartsSaga();

describe('checkCartsSaga Saga', () => {
  it('should start task to watch for INIT_LOAD', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.INIT_LOAD, initLoad));
  });
  it('should start task to watch for CREATE_ITEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.CREATE_ITEM, saveData));
  });
  it('should start task to watch for UPDATE_ITEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPDATE_ITEM, updateData));
  });
  it('should start task to watch for DELETE_ITEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.DELETE_ITEM, deleteData));
  });
  it('should start task to watch for SEARCH', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.SEARCH, searchItem));
  });
  it('should start task to watch for UPDATE_SHOPPING_STEP', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.UPDATE_SHOPPING_STEP, onUpdateShoppingStep),
    );
  });
  it('should start task to watch for LOAD_VIEW_ORDER', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_VIEW_ORDER, onLoadViewOrder));
  });
});
