import * as selectors from '../selectors';

const mockPayload = {
  redeem: [],
  redeemPoint: {
    uuid_index: '',
    product_code: '',
    redeem_code: '',
  },
  email: '',
  error: '',
};

describe('selectDashboardDomain', () => {
  it('Expect mock state and initial state from selectDashboardDomain is equal', () => {
    const state = selectors.selectDashboardDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
