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
