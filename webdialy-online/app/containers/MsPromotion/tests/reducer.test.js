import msPromotionReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('msPromotionReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(msPromotionReducer(undefined, {})).toEqual(expectedResult);
  });
});
