import produce from 'immer';
import homePageReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initLoad action correctly', () => {
    const expectedResult = produce(state, draft => {});
    expect(homePageReducer(state, actions.initLoad())).toEqual(expectedResult);
  });
  it('should handle the initLoadSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.company = 'company';
    });
    expect(homePageReducer(state, actions.initLoadSuccess('company'))).toEqual(expectedResult);
  });
  it('should handle the initLoadError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = 'error';
    });
    expect(homePageReducer(state, actions.initLoadError('error'))).toEqual(expectedResult);
  });
});
