import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsRoleDomain', () => {
  it('Expect mock state and initial state from selectMsRoleDomain is equal', () => {
    const state = selectors.selectMsRoleDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
