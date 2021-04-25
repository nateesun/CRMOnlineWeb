import produce from 'immer';
import * as actions from '../actions';
import profileChangePwdReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileChangePwdReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileChangePwdReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = '';
      draft.error = '';
    });
    expect(profileChangePwdReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the updatePassword action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.editForm = {};
    });
    expect(profileChangePwdReducer(state, actions.updatePassword({}))).toEqual(expectedResult);
  });
  it('should handle the updatePasswordSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
    });
    expect(profileChangePwdReducer(state, actions.updatePasswordSuccess())).toEqual(expectedResult);
  });
  it('should handle the updatePasswordError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(profileChangePwdReducer(state, actions.updatePasswordError('error'))).toEqual(
      expectedResult,
    );
  });
});
