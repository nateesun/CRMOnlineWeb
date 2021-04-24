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
});
