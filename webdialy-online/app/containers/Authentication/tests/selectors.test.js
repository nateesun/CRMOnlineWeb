import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectAuthenticationDomain', () => {
  const domain = selectors.selectAuthenticationDomain(mockPayload);
  it('Expect mock state and loadRole state from selectAuthenticationDomain is equal', () => {
    const state = selectors.selectAuthenticationDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect mock state and loadRole state from makeSelectAuthentication is equal', () => {
    const dataSelector = selectors.makeSelectAuthentication();
    expect(dataSelector(mockPayload)).toEqual(domain);
  });
  it('Expect mock state and loadRole state from makeSelectAuthenticationAuth is equal', () => {
    const dataSelector = selectors.makeSelectAuthenticationAuth();
    expect(dataSelector(mockPayload)).toEqual(domain.auth);
  });
  it('Expect mock state and loadRole state from makeSelectAuthenticationAuthStatus is equal', () => {
    const dataSelector = selectors.makeSelectAuthenticationAuthStatus();
    expect(dataSelector(mockPayload)).toEqual(domain.rolesStatus);
  });
});
