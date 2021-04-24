import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMemberOrdersConfirmDomain', () => {
  it('Expect mock state and initial state from selectMemberOrdersConfirmDomain is equal', () => {
    const state = selectors.selectMemberOrdersConfirmDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
