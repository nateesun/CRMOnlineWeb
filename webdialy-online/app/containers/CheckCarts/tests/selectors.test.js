import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectCheckCartsDomain', () => {
  it('Expect mock state and initial state from selectCheckCartsDomain is equal', () => {
    const state = selectors.selectCheckCartsDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect mock state and initial state from makeSelectCheckCarts is equal', () => {
    const dataSelector = selectors.makeSelectCheckCarts(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(mockPayload);
  });
  it('Expect mock state and initial state from makeSelectCurrentId is equal', () => {
    const { currentId } = mockPayload;
    const dataSelector = selectors.makeSelectCurrentId(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(currentId);
  });
  it('Expect mock state and initial state from makeSelectPage is equal', () => {
    const { page } = mockPayload;
    const dataSelector = selectors.makeSelectPage(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(page);
  });
  it('Expect mock state and initial state from makeSelectListItems is equal', () => {
    const { list } = mockPayload;
    const dataSelector = selectors.makeSelectListItems(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(list);
  });
  it('Expect mock state and initial state from makeSelectForm is equal', () => {
    const { data } = mockPayload;
    const dataSelector = selectors.makeSelectForm(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(data);
  });
  it('Expect mock state and initial state from makeSelectResponse is equal', () => {
    const { response } = mockPayload;
    const dataSelector = selectors.makeSelectResponse(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(response);
  });
  it('Expect mock state and initial state from makeSelectCartStatus is equal', () => {
    const { carts } = mockPayload;
    const dataSelector = selectors.makeSelectCartStatus(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(carts);
  });
});
