import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMembersDomain', () => {
  it('Expect mock state and initial state from selectMembersDomain is equal', () => {
    const state = selectors.selectMembersDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
