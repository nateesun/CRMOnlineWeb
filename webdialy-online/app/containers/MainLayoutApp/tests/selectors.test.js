import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMainLayoutAppDomain', () => {
  it('Expect mock state and initial state from selectMainLayoutAppDomain is equal', () => {
    const state = selectors.selectMainLayoutAppDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
