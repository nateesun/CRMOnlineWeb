import * as selectors from '../selectors';

const mockPayload = {
  recoverPassword: {},
};

describe('selectRecoverPasswordDomain', () => {
  it('Expect from selectRecoverPasswordDomain is equal', () => {
    const state = selectors.selectRecoverPasswordDomain(mockPayload);
    expect(state).toEqual(mockPayload.recoverPassword);
  });
});
