import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileChangePwdDomain', () => {
  const domain = selectors.selectProfileChangePwdDomain(mockPayload);
  it('Expect from selectProfileChangePwdDomain is equal', () => {
    const state = selectors.selectProfileChangePwdDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectProfile is equal', () => {
    const state = selectors.makeSelectProfile();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectEditForm is equal', () => {
    const state = selectors.makeSelectEditForm();
    expect(state(mockPayload)).toEqual(domain.editForm);
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
