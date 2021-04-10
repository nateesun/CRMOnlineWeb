import * as selectors from '../selectors';

const mockPayload = {
  status: '',
  error: '',
};

describe('selectProfileEditDomain', () => {
  it('Expect mock state and initial state from selectProfileEditDomain is equal', () => {
    const state = selectors.selectProfileEditDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
