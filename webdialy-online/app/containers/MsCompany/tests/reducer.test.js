import msCompanyReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msCompanyReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msCompanyReducer(undefined, {})).toEqual(expectedResult);
  });
});
