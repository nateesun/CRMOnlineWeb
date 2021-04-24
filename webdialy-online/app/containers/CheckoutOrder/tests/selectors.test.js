import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectCheckoutDomain', () => {
  const domain = selectors.selectCheckoutDomain(mockPayload);
  it('Expect selectCheckoutDomain is equal', () => {
    const state = selectors.selectCheckoutDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectCheckout is equal', () => {
    const dataSelector = selectors.makeSelectCheckout();
    expect(dataSelector(mockPayload)).toEqual(mockPayload);
  });
  it('Expect from makeSelectCarts is equal', () => {
    const dataSelector = selectors.makeSelectCarts();
    expect(dataSelector(mockPayload)).toEqual(domain.cartList);
  });
  it('Expect from makeSelectCartsNo is equal', () => {
    const dataSelector = selectors.makeSelectCartsNo();
    expect(dataSelector(mockPayload)).toEqual(domain.cart_no);
  });
  it('Expect from makeSelectProduct is equal', () => {
    const dataSelector = selectors.makeSelectProduct();
    expect(dataSelector(mockPayload)).toEqual(domain.product);
  });
  it('Expect from makeSelectMemberCode is equal', () => {
    const dataSelector = selectors.makeSelectMemberCode();
    expect(dataSelector(mockPayload)).toEqual(domain.member_code);
  });
  it('Expect from makeSelectMemberShipping is equal', () => {
    const dataSelector = selectors.makeSelectMemberShipping();
    expect(dataSelector(mockPayload)).toEqual(domain.memberShipping);
  });
  it('Expect from makeSelectFileUpload is equal', () => {
    const dataSelector = selectors.makeSelectFileUpload();
    expect(dataSelector(mockPayload)).toEqual(domain.img_upload);
  });
  it('Expect from makeSelectPaymentData is equal', () => {
    const dataSelector = selectors.makeSelectPaymentData();
    expect(dataSelector(mockPayload)).toEqual(domain.paymentData);
  });
  it('Expect from makeSelectSlipFile is equal', () => {
    const dataSelector = selectors.makeSelectSlipFile();
    expect(dataSelector(mockPayload)).toEqual(domain.slipFileName);
  });
  it('Expect from makeSelectSlipValidateStatus is equal', () => {
    const dataSelector = selectors.makeSelectSlipValidateStatus();
    expect(dataSelector(mockPayload)).toEqual(domain.slipValidateStatus);
  });
  it('Expect from makeSelectAddressForm is equal', () => {
    const dataSelector = selectors.makeSelectAddressForm();
    expect(dataSelector(mockPayload)).toEqual(domain.addressForm);
  });
  it('Expect from makeSelectSlipPath is equal', () => {
    const dataSelector = selectors.makeSelectSlipPath();
    expect(dataSelector(mockPayload)).toEqual(domain.slipPath);
  });
  it('Expect from makeSelectResponse is equal', () => {
    const dataSelector = selectors.makeSelectResponse();
    expect(dataSelector(mockPayload)).toEqual(domain.response);
  });
  it('Expect from makeSelectBranch is equal', () => {
    const dataSelector = selectors.makeSelectBranch();
    expect(dataSelector(mockPayload)).toEqual(domain.branch);
  });
});
