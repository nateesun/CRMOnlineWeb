import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectUsePromotionDomain', () => {
  it('Expect mock state and initial state from selectUsePromotionDomain is equal', () => {
    const state = selectors.selectUsePromotionDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
