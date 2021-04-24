import profileShippingReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('profileShippingReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(profileShippingReducer(undefined, {})).toEqual(expectedResult);
  });
});
