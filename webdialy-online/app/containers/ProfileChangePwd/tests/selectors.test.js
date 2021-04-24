import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileChangePwdDomain', () => {
  it('Expect mock state and initial state from selectProfileChangePwdDomain is equal', () => {
    const state = selectors.selectProfileChangePwdDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
