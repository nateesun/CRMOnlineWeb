import * as selectors from '../selectors';

const mockPayload = {
  memberTracking: {},
};

describe('selectMemberTrackingDomain', () => {
  it('Expect mock state and initial state from selectMemberTrackingDomain is equal', () => {
    const state = selectors.selectMemberTrackingDomain(mockPayload);
    expect(state).toEqual(mockPayload.memberTracking);
  });
});
