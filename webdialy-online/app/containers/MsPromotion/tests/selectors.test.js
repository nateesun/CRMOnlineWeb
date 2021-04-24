import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsPromotionDomain', () => {
  it('Expect from selectMsPromotionDomain is equal', () => {
    const state = selectors.selectMsPromotionDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
