import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectDashboardDomain', () => {
  const domain = selectors.selectDashboardDomain(mockPayload);
  it('Expect from selectDashboardDomain is equal', () => {
    const state = selectors.selectDashboardDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect from makeSelectDashboard is equal', () => {
    const state = selectors.makeSelectDashboard();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectRedeem is equal', () => {
    const state = selectors.makeSelectRedeem();
    expect(state(mockPayload)).toEqual(domain.redeem);
  });
  it('Expect from makeSelectRedeemPoint is equal', () => {
    const state = selectors.makeSelectRedeemPoint();
    expect(state(mockPayload)).toEqual(domain.redeemPoint);
  });
});
