import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileEditDomain', () => {
  const domain = selectors.selectProfileEditDomain(mockPayload);
  it('Expect from selectProfileEditDomain is equal', () => {
    const state = selectors.selectProfileEditDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectProfile is equal', () => {
    const state = selectors.makeSelectProfile();
    expect(state(mockPayload)).toEqual(domain);
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
