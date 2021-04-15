import * as selectors from '../selectors';

const mockPayload = {
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

describe('selectAuthenticationDomain', () => {
  it('Expect mock state and loadRole state from selectAuthenticationDomain is equal', () => {
    const state = selectors.selectAuthenticationDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
