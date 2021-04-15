/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import profileEditSaga, { onEditMember } from '../saga';
import * as constants from '../constants';

const generator = profileEditSaga();

describe('profileEditSaga Saga', () => {
  it('should start task to watch for EDIT_MEMBER', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(constants.EDIT_MEMBER, onEditMember));
  });
});
