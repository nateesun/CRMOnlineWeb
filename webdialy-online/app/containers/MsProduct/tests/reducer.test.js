import msProductReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msProductReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msProductReducer(undefined, {})).toEqual(expectedResult);
  });
});
