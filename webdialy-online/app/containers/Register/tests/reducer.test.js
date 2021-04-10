import registerReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      data: {
        prefix: '',
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: '',
        birthday: '',
        lineId: '',
      },
      company: {},
      status: '',
      error: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(registerReducer(undefined, {})).toEqual(expectedResult);
  });
});
