import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsProductDomain', () => {
  const domain = selectors.selectMsProductDomain(mockPayload);
  it('Expect from selectMsProductDomain is equal', () => {
    const state = selectors.selectMsProductDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectMsProduct is equal', () => {
    const state = selectors.makeSelectMsProduct();
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
  it('Expect from makeSelectFileUpload is equal', () => {
    const state = selectors.makeSelectFileUpload();
    expect(state(mockPayload)).toEqual(domain.img_upload);
  });
  it('Expect from makeSelectProductImport is equal', () => {
    const state = selectors.makeSelectProductImport();
    expect(state(mockPayload)).toEqual(domain.productImports);
  });
  it('Expect from makeSelectProductImportHeader is equal', () => {
    const state = selectors.makeSelectProductImportHeader();
    expect(state(mockPayload)).toEqual(domain.productImportHeaders);
  });
});
