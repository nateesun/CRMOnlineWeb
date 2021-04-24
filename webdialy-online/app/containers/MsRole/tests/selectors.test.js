import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsRoleDomain', () => {
  it('Expect from selectMsRoleDomain is equal', () => {
    const state = selectors.selectMsRoleDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
