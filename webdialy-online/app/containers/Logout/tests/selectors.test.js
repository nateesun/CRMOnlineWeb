import * as selectors from '../selectors';

const mockPayload = {
  logout: 'Y',
};

describe('selectLogoutDomain', () => {
  const domain = selectors.selectLogoutDomain(mockPayload);
  it('Expect from selectLogoutDomain is equal', () => {
    const state = selectors.selectLogoutDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectLogout is equal', () => {
    const state = selectors.makeSelectLogout();
    expect(state(mockPayload)).toEqual(domain);
  });
});
