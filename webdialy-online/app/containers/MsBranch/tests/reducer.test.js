import msBranchReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msBranchReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msBranchReducer(undefined, {})).toEqual(expectedResult);
  });
});
