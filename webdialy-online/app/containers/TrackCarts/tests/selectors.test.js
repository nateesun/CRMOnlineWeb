import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectTrackCartsDomain', () => {
  const domain = selectors.selectTrackCartsDomain(mockPayload);
  it('Expect from selectTrackCartsDomain is equal', () => {
    const state = selectors.selectTrackCartsDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectTrackCarts is equal', () => {
    const state = selectors.makeSelectTrackCarts();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectCurrentId is equal', () => {
    const state = selectors.makeSelectCurrentId();
    expect(state(mockPayload)).toEqual(domain.currentId);
  });
  it('Expect from makeSelectPage is equal', () => {
    const state = selectors.makeSelectPage();
    expect(state(mockPayload)).toEqual(domain.page);
  });
  it('Expect from makeSelectListItems is equal', () => {
    const state = selectors.makeSelectListItems();
    expect(state(mockPayload)).toEqual(domain.list);
  });
  it('Expect from makeSelectForm is equal', () => {
    const state = selectors.makeSelectForm();
    expect(state(mockPayload)).toEqual(domain.data);
  });
  it('Expect from makeSelectResponse is equal', () => {
    const state = selectors.makeSelectResponse();
    expect(state(mockPayload)).toEqual(domain.response);
  });
});
