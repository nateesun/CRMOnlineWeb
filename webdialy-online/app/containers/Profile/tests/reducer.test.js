import profileReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      company: {},
      email: '',
      error: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileReducer(undefined, {})).toEqual(expectedResult);
  });
});
