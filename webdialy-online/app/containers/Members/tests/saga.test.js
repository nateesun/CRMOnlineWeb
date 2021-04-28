/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import membersSaga, {
  initLoad,
  saveData,
  updateMemberData,
  deleteData,
  searchItem,
  onLoadRolesList,
} from '../saga';
import * as constants from '../constants';

const generator = membersSaga();

describe('membersSaga Saga', () => {
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
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.UPDATE_ITEM, updateMemberData));
  });
  it('should start task to watch for DELETE_ITEM', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.DELETE_ITEM, deleteData));
  });
  it('should start task to watch for SEARCH', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.SEARCH, searchItem));
  });
  it('should start task to watch for LOAD_ROLES', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.LOAD_ROLES, onLoadRolesList));
  });
});
