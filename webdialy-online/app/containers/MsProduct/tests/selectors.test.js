import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsProductDomain', () => {
  it('Expect from selectMsProductDomain is equal', () => {
    const state = selectors.selectMsProductDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
