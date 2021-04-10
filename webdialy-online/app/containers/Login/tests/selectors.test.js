import * as selectors from '../selectors';

const mockPayload = {
  loginForm: {
    email: '',
    mobile: '',
    password: '',
    type: '',
  },
  response: {
    status: null,
    message: null,
  },
  profile: {},
  loggedIn: false,
  queryDb: '',
};

describe('selectLoginDomain', () => {
  it('Expect mock state and initial state from selectLogin is equal', () => {
    const state = selectors.selectLogin(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
