import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLineLoginDomain', () => {
  const domain = selectors.selectLineLoginDomain(mockPayload);
  it('Expect from selectLineLoginDomain is equal', () => {
    const state = selectors.selectLineLoginDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectLineLogin is equal', () => {
    const state = selectors.makeSelectLineLogin();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectLineLoginProfile is equal', () => {
    const state = selectors.makeSelectLineLoginProfile();
    expect(state(mockPayload)).toEqual(domain.profile);
  });
  it('Expect from makeSelectToken is equal', () => {
    const state = selectors.makeSelectToken();
    expect(state(mockPayload)).toEqual(domain.token);
  });
});
