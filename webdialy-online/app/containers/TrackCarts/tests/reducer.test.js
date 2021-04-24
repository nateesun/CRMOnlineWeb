import trackCartsReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('trackCartsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(trackCartsReducer(undefined, {})).toEqual(expectedResult);
  });
});
