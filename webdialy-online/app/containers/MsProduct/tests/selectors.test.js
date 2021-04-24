import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsProductDomain', () => {
  it('Expect mock state and initial state from selectMsProductDomain is equal', () => {
    const state = selectors.selectMsProductDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
