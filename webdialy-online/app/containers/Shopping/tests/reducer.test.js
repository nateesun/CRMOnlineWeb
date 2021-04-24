import shoppingReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('shoppingReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(shoppingReducer(undefined, {})).toEqual(expectedResult);
  });
});
