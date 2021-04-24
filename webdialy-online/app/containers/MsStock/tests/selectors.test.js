import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsStockDomain', () => {
  it('Expect from selectMsStockDomain is equal', () => {
    const state = selectors.selectMsStockDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
