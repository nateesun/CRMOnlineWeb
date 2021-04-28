import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLoginDomain', () => {
  const domain = selectors.selectLogin(mockPayload);
  it('Expect from selectLogin is equal', () => {
    const state = selectors.selectLogin(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectLogin is equal', () => {
    const state = selectors.makeSelectLogin();
    expect(state(mockPayload)).toEqual(domain.loginForm);
  });
  it('Expect from makeSelectProfile is equal', () => {
    const state = selectors.makeSelectProfile();
    expect(state(mockPayload)).toEqual(domain.profile);
  });
  it('Expect from makeLoginError is equal', () => {
    const state = selectors.makeLoginError();
    expect(state(mockPayload)).toEqual(domain.error);
  });
  it('Expect from makeSelectLoggedIn is equal', () => {
    const state = selectors.makeSelectLoggedIn();
    expect(state(mockPayload)).toEqual(domain.loggedIn);
  });
  it('Expect from makeSelectDatabase is equal', () => {
    const state = selectors.makeSelectDatabase();
    expect(state(mockPayload)).toEqual(domain.queryDb);
  });
});
