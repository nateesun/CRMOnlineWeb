import authenticationReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('authenticationReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      auth: {
        user: '',
        uriPath: '',
      },
      rolesStatus: '',
      response: {
        msg: '',
        error: '',
      },
    };
  });

  it('returns the loadRole state', () => {
    const expectedResult = state;
    expect(authenticationReducer(undefined, {})).toEqual(expectedResult);
  });
});
