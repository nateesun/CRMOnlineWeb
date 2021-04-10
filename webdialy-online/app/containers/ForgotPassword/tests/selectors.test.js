import * as selectors from '../selectors';

const mockPayload = {
  request: {
    email: '',
    mobile: '',
    secret: '',
  },
  status: '',
  msg: '',
};

describe('selectForgotPasswordDomain', () => {
  it('Expect mock state and initial state from selectForgotPasswordDomain is equal', () => {
    const state = selectors.selectForgotPasswordDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
