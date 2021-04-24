import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsBranchDomain', () => {
  it('Expect from selectMsBranchDomain is equal', () => {
    const state = selectors.selectMsBranchDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
