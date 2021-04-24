import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectForgotPasswordDomain', () => {
  const domain = selectors.selectForgotPasswordDomain(mockPayload);
  it('Expect from selectForgotPasswordDomain is equal', () => {
    const state = selectors.selectForgotPasswordDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectForgotPassword is equal', () => {
    const state = selectors.makeSelectForgotPassword();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectRequest is equal', () => {
    const state = selectors.makeSelectRequest();
    expect(state(mockPayload)).toEqual(domain.request);
  });
});
