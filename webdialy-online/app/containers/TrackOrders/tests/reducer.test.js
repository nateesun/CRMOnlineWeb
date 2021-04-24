import trackOrdersReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('trackOrdersReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(trackOrdersReducer(undefined, {})).toEqual(expectedResult);
  });
});
