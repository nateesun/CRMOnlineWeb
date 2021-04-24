import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLineLoginDomain', () => {
  it('Expect mock state and initial state from selectLineLoginDomain is equal', () => {
    const state = selectors.selectLineLoginDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
