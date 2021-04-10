import produce from 'immer';
import homePageReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homePageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      company: {},
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homePageReducer(undefined, {})).toEqual(expectedResult);
  });
});
