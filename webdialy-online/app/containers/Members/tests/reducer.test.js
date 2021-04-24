import membersReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('membersReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(membersReducer(undefined, {})).toEqual(expectedResult);
  });
});
