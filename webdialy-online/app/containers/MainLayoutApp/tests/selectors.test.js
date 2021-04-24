import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMainLayoutAppDomain', () => {
  const domain = selectors.selectMainLayoutAppDomain(mockPayload);
  it('Expect from selectMainLayoutAppDomain is equal', () => {
    const state = selectors.selectMainLayoutAppDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMainLayoutApp is equal', () => {
    const state = selectors.makeSelectMainLayoutApp();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectProfile is equal', () => {
    const state = selectors.makeSelectProfile();
    expect(state(mockPayload)).toEqual(domain.profile);
  });
});
