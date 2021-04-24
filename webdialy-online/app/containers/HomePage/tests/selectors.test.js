import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectHomePageDomain', () => {
  it('Expect mock state and initial state from selectHomePageDomain is equal', () => {
    const state = selectors.selectHomePageDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
