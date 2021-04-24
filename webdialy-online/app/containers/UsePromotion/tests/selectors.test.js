import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectUsePromotionDomain', () => {
  it('Expect from selectUsePromotionDomain is equal', () => {
    const state = selectors.selectUsePromotionDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
