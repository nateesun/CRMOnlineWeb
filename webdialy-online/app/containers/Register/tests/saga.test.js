/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeEvery } from 'redux-saga/effects';
import registerSaga, { onAddRegisterMember } from '../saga';
import * as constants from '../constants';

const generator = registerSaga();

describe('registerSaga Saga', () => {
  it('should start task to watch for ADD_REGISTER_MEMBER', () => {
    const takeLatestDescriptor = generator.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeEvery(constants.ADD_REGISTER_MEMBER, onAddRegisterMember),
    );
  });
});
