import * as selectors from '../selectors';

const mockPayload = {
  recoverPassword: {},
};

describe('selectRecoverPasswordDomain', () => {
  const domain = selectors.selectRecoverPasswordDomain(mockPayload);
  it('Expect from selectRecoverPasswordDomain is equal', () => {
    const state = selectors.selectRecoverPasswordDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectRecoverPassword is equal', () => {
    const state = selectors.makeSelectRecoverPassword(mockPayload);
    expect(state(mockPayload)).toEqual(domain);
  });
});
