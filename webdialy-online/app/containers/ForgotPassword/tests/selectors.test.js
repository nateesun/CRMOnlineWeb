import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectForgotPasswordDomain', () => {
  it('Expect mock state and initial state from selectForgotPasswordDomain is equal', () => {
    const state = selectors.selectForgotPasswordDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
