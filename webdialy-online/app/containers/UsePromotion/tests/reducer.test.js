import usePromotionReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('usePromotionReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(usePromotionReducer(undefined, {})).toEqual(expectedResult);
  });
});
