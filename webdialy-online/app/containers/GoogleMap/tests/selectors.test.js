import * as selectors from '../selectors';

const mockPayload = {
  googleMap: {},
};

describe('selectGoogleMapDomain', () => {
  it('Expect mock state and initial state from selectGoogleMapDomain is equal', () => {
    const state = selectors.selectGoogleMapDomain(mockPayload);
    expect(state).toEqual(mockPayload.googleMap);
  });
});
