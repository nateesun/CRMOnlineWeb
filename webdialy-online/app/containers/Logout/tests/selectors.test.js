import * as selectors from '../selectors';

const mockPayload = {
  logout: 'Y',
};

describe('selectLogoutDomain', () => {
  it('Expect from selectLogoutDomain is equal', () => {
    const state = selectors.selectLogoutDomain(mockPayload);
    expect(state).toEqual(mockPayload.logout);
  });
});
