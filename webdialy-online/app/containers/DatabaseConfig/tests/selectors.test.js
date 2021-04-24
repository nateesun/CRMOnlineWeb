import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectDatabaseConfigDomain', () => {
  it('Expect mock state and initial state from selectDatabaseConfigDomain is equal', () => {
    const state = selectors.selectDatabaseConfigDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
