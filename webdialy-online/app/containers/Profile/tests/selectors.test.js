import * as selectors from '../selectors';

const mockPayload = {
  company: {},
  email: '',
  error: '',
};

describe('selectProfileDomain', () => {
  it('Expect mock state and initial state from selectProfileDomain is equal', () => {
    const state = selectors.selectProfileDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
