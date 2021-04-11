import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    product_code: '',
    product_name: '',
    point_to_redeem: 0,
    qty_in_stock: 0,
    start_time: '',
    finish_time: '',
    img_path: '',
  },
  page: 'LIST',
  img_upload: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
};

describe('selectMsPromotionDomain', () => {
  it('Expect mock state and initial state from selectMsPromotionDomain is equal', () => {
    const state = selectors.selectMsPromotionDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
