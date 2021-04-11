import * as selectors from '../selectors';

const mockPayload = {
  token: null,
  profile: {},
};

describe('selectLineLoginDomain', () => {
  it('Expect mock state and initial state from selectLineLoginDomain is equal', () => {
    const state = selectors.selectLineLoginDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
