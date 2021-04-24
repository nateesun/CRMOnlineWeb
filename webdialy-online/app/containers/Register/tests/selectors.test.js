import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectRegisterDomain', () => {
  const domain = selectors.selectRegisterDomain(mockPayload);
  it('Expect from selectRegisterDomain is equal', () => {
    const state = selectors.selectRegisterDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMember is equal', () => {
    const state = selectors.makeSelectMember();
    expect(state(mockPayload)).toEqual(domain.data);
  });
  it('Expect from makeRegisterStatus is equal', () => {
    const state = selectors.makeRegisterStatus();
    expect(state(mockPayload)).toEqual(domain.status);
  });
  it('Expect from makeErrorRegister is equal', () => {
    const state = selectors.makeErrorRegister();
    expect(state(mockPayload)).toEqual(domain.error);
  });
});
