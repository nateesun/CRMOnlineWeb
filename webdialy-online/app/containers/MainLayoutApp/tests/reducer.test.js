import produce from 'immer';
import mainLayoutAppReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('mainLayoutAppReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainLayoutAppReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(mainLayoutAppReducer(state, actions.loadProfile())).toEqual(expectedResult);
  });
  it('should handle the loadProfileSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.profile = {};
    });
    expect(mainLayoutAppReducer(state, actions.loadProfileSuccess({}))).toEqual(expectedResult);
  });
  it('should handle the loadProfileError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(mainLayoutAppReducer(state, actions.loadProfileError('error'))).toEqual(expectedResult);
  });
});
