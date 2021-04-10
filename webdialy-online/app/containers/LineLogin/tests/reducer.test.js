import lineLoginReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('lineLoginReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      token: null,
      profile: {},
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(lineLoginReducer(undefined, {})).toEqual(expectedResult);
  });
});
