import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectShoppingDomain', () => {
  const domain = selectors.selectShoppingDomain(mockPayload);
  it('Expect from selectShoppingDomain is equal', () => {
    const state = selectors.selectShoppingDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectShopping is equal', () => {
    const state = selectors.makeSelectShopping();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectProductList is equal', () => {
    const state = selectors.makeSelectProductList();
    expect(state(mockPayload)).toEqual(domain.productList);
  });
  it('Expect from makeSelectItemCart is equal', () => {
    const state = selectors.makeSelectItemCart();
    expect(state(mockPayload)).toEqual(domain.itemCart);
  });
  it('Expect from makeSelectCart is equal', () => {
    const state = selectors.makeSelectCart();
    expect(state(mockPayload)).toEqual(domain.cart);
  });
  it('Expect from makeSelectSearchData is equal', () => {
    const state = selectors.makeSelectSearchData();
    expect(state(mockPayload)).toEqual(domain.search);
  });
});
