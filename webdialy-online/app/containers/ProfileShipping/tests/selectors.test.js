import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileShippingDomain', () => {
  it('Expect from selectProfileShippingDomain is equal', () => {
    const state = selectors.selectProfileShippingDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
