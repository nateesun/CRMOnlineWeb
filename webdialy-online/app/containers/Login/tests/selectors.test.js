import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLoginDomain', () => {
  it('Expect mock state and initial state from selectLogin is equal', () => {
    const state = selectors.selectLogin(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
