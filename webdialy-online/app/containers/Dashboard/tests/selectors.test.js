import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectDashboardDomain', () => {
  it('Expect mock state and initial state from selectDashboardDomain is equal', () => {
    const state = selectors.selectDashboardDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
