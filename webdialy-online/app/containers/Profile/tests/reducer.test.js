import produce from 'immer';
import * as actions from '../actions';
import profileReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initLoadCompany action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(profileReducer(state, actions.initLoadCompany())).toEqual(expectedResult);
  });
  it('should handle the initLoadCompany action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.company = 'c001';
    });
    expect(profileReducer(state, actions.initLoadCompanySuccess('c001'))).toEqual(expectedResult);
  });
  it('should handle the initLoadCompany action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(profileReducer(state, actions.initLoadCompanyError())).toEqual(expectedResult);
  });
});
