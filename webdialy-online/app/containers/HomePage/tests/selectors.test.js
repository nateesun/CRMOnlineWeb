import * as selectors from '../selectors';

const mockPayload = {
  company: {},
};

describe('selectHomePageDomain', () => {
  it('Expect mock state and initial state from selectHomePageDomain is equal', () => {
    const state = selectors.selectHomePageDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
