import msStockReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msStockReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msStockReducer(undefined, {})).toEqual(expectedResult);
  });
});
