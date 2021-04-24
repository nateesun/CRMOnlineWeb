import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileDomain', () => {
  const domain = selectors.selectProfileDomain(mockPayload);
  it('Expect from selectProfileDomain is equal', () => {
    const state = selectors.selectProfileDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectProfile is equal', () => {
    const state = selectors.makeSelectProfile();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectCompany is equal', () => {
    const state = selectors.makeSelectCompany();
    expect(state(mockPayload)).toEqual(domain.company);
  });
  it('Expect from makeUpdateStatus is equal', () => {
    const state = selectors.makeUpdateStatus();
    expect(state(mockPayload)).toEqual(domain.status);
  });
  it('Expect from makeErrorUpdate is equal', () => {
    const state = selectors.makeErrorUpdate();
    expect(state(mockPayload)).toEqual(domain.error);
  });
});
