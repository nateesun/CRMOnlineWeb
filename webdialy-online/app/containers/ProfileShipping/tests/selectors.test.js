import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileShippingDomain', () => {
  const domain = selectors.selectProfileShippingDomain(mockPayload);
  it('Expect from selectProfileShippingDomain is equal', () => {
    const state = selectors.selectProfileShippingDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectProfileShipping is equal', () => {
    const state = selectors.makeSelectProfileShipping();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectShipping is equal', () => {
    const state = selectors.makeSelectShipping();
    expect(state(mockPayload)).toEqual(domain.shipping);
  });
  it('Expect from makeSelectAddressData is equal', () => {
    const state = selectors.makeSelectAddressData();
    expect(state(mockPayload)).toEqual(domain.address);
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
