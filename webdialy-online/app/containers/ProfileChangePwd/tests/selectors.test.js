import * as selectors from '../selectors';

const mockPayload = {
  username: '',
  editForm: {},
  status: '',
  error: '',
};

describe('selectProfileChangePwdDomain', () => {
  it('Expect mock state and initial state from selectProfileChangePwdDomain is equal', () => {
    const state = selectors.selectProfileChangePwdDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
