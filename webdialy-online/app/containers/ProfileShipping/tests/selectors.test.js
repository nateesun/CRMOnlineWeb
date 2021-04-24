import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileShippingDomain', () => {
  it('Expect mock state and initial state from selectProfileShippingDomain is equal', () => {
    const state = selectors.selectProfileShippingDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
