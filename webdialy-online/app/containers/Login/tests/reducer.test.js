import loginReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('loginReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loginForm: {
        username: '',
        password: '',
      },
      response: {
        status: null,
        message: null,
      },
      profile: {},
      loggedIn: false,
      queryDb: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(loginReducer(undefined, {})).toEqual(expectedResult);
  });
});
