/**
 * App reducer
 */

import produce from 'immer';
import appReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, draft => {});
    expect(appReducer(state, actions.initLoad())).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.leftMenu = [];
    });
    expect(appReducer(state, actions.initLoadSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.leftMenu = [];
      draft.error = 'Error';
    });
    expect(appReducer(state, actions.initLoadError('Error'))).toEqual(expectedResult);
  });
  it('should handle the clearMenu action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.leftMenu = [];
    });
    expect(appReducer(state, actions.clearMenu())).toEqual(expectedResult);
  });
});
