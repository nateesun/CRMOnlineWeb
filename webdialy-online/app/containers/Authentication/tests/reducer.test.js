/*
 *
 * Authentication reducer
 *
 */

import produce from 'immer';
import authenticationReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('authenticationReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the loadRole state', () => {
    const expectedResult = state;
    expect(authenticationReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the loadRole action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.auth = 'role';
    });
    expect(authenticationReducer(state, actions.loadRole('role'))).toEqual(expectedResult);
  });
  it('should handle the loadRole action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.rolesStatus = 'status';
      draft.response.msg = 'Success';
    });
    expect(authenticationReducer(state, actions.loadRoleSuccess('status'))).toEqual(expectedResult);
  });
  it('should handle the loadRole action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.rolesStatus = 'not_allow';
      draft.response.error = 'error';
    });
    expect(authenticationReducer(state, actions.loadRoleError('error'))).toEqual(expectedResult);
  });
});
