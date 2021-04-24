import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectShoppingDomain', () => {
  it('Expect from selectShoppingDomain is equal', () => {
    const state = selectors.selectShoppingDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
