import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectCheckCartsDomain', () => {
  const domain = selectors.selectCheckCartsDomain(mockPayload);
  it('Expect from selectCheckCartsDomain is equal', () => {
    const state = selectors.selectCheckCartsDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect from makeSelectCheckCarts is equal', () => {
    const dataSelector = selectors.makeSelectCheckCarts();
    expect(dataSelector(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectCurrentId is equal', () => {
    const dataSelector = selectors.makeSelectCurrentId();
    expect(dataSelector(mockPayload)).toEqual(domain.currentId);
  });
  it('Expect from makeSelectPage is equal', () => {
    const dataSelector = selectors.makeSelectPage();
    expect(dataSelector(mockPayload)).toEqual(domain.page);
  });
  it('Expect from makeSelectListItems is equal', () => {
    const dataSelector = selectors.makeSelectListItems();
    expect(dataSelector(mockPayload)).toEqual(domain.list);
  });
  it('Expect from makeSelectForm is equal', () => {
    const dataSelector = selectors.makeSelectForm();
    expect(dataSelector(mockPayload)).toEqual(domain.data);
  });
  it('Expect from makeSelectResponse is equal', () => {
    const dataSelector = selectors.makeSelectResponse(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(domain.response);
  });
  it('Expect from makeSelectCartStatus is equal', () => {
    const dataSelector = selectors.makeSelectCartStatus(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(domain.carts);
  });
});
