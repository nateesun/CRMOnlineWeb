import registerReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(registerReducer(undefined, {})).toEqual(expectedResult);
  });
});
