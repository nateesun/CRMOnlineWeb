import profileChangePwdReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileChangePwdReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileChangePwdReducer(undefined, {})).toEqual(expectedResult);
  });
});
