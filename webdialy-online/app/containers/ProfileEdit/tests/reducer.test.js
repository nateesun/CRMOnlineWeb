import produce from 'immer';
import * as actions from '../actions';
import profileEditReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileEditReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileEditReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = '';
      draft.error = '';
      draft.profile = {};
    });
    expect(profileEditReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the editMember action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.profile = {};
    });
    expect(profileEditReducer(state, actions.editMember({}))).toEqual(expectedResult);
  });
  it('should handle the editMemberSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.status = 'Success';
    });
    expect(profileEditReducer(state, actions.editMemberSuccess())).toEqual(expectedResult);
  });
  it('should handle the editMemberError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = '';
    });
    expect(profileEditReducer(state, actions.editMemberError(''))).toEqual(expectedResult);
  });
});
