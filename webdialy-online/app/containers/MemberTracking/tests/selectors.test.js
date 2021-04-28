import * as selectors from '../selectors';

const mockPayload = {
  memberTracking: {},
};

describe('selectMemberTrackingDomain', () => {
  const domain = selectors.selectMemberTrackingDomain(mockPayload);
  it('Expect from selectMemberTrackingDomain is equal', () => {
    const state = selectors.selectMemberTrackingDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMemberTracking is equal', () => {
    const state = selectors.makeSelectMemberTracking();
    expect(state(mockPayload)).toEqual(domain);
  });
});
