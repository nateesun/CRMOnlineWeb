import msRoleReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msRoleReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msRoleReducer(undefined, {})).toEqual(expectedResult);
  });
});
