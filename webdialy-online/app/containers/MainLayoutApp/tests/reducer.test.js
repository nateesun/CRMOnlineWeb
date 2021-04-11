import mainLayoutAppReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('mainLayoutAppReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      profile: {},
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(mainLayoutAppReducer(undefined, {})).toEqual(expectedResult);
  });
});
