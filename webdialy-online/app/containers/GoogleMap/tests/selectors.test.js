import * as selectors from '../selectors';

const mockPayload = {
  googleMap: {},
};

describe('selectGoogleMapDomain', () => {
  const domain = selectors.selectGoogleMapDomain(mockPayload);
  it('Expect from selectGoogleMapDomain is equal', () => {
    const state = selectors.selectGoogleMapDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectGoogleMap is equal', () => {
    const state = selectors.makeSelectGoogleMap();
    expect(state(mockPayload)).toEqual(domain);
  });
});
