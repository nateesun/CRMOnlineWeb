import * as selectors from '../selectors';

const mockPayload = {
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

describe('selectRegisterDomain', () => {
  it('Expect mock state and initial state from selectRegisterDomain is equal', () => {
    const state = selectors.selectRegisterDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
