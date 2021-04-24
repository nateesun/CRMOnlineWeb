import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectCheckoutDomain', () => {
  it('Expect mock state and initial state from selectCheckoutDomain is equal', () => {
    const state = selectors.selectCheckoutDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect mock state and initial state from makeSelectCheckout is equal', () => {
    const dataSelector = selectors.makeSelectCheckout(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(mockPayload);
  });
});
