import msPromotionReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msPromotionReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msPromotionReducer(undefined, {})).toEqual(expectedResult);
  });
});
