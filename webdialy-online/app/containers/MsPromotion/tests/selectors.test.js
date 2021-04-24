import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsPromotionDomain', () => {
  const domain = selectors.selectMsPromotionDomain(mockPayload);
  it('Expect from selectMsPromotionDomain is equal', () => {
    const state = selectors.selectMsPromotionDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMsPromotion is equal', () => {
    const state = selectors.makeSelectMsPromotion();
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
  it('Expect from makeSelectListItems is equal', () => {
    const state = selectors.makeSelectForm();
    expect(state(mockPayload)).toEqual(domain.data);
  });
  it('Expect from makeSelectFileUpload is equal', () => {
    const state = selectors.makeSelectFileUpload();
    expect(state(mockPayload)).toEqual(domain.img_upload);
  });
  it('Expect from makeSelectResponse is equal', () => {
    const state = selectors.makeSelectResponse();
    expect(state(mockPayload)).toEqual(domain.response);
  });
});
