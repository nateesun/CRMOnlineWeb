import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    code: '',
    name: '',
    unit_sale: '',
    group_code: '',
  },
  productImportHeaders: [],
  productImports: [],
  page: 'LIST',
  img_upload: null,
  status: null,
  message: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
};

describe('selectMsProductDomain', () => {
  it('Expect mock state and initial state from selectMsProductDomain is equal', () => {
    const state = selectors.selectMsProductDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
