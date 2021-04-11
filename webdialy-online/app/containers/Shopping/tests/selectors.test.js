import * as selectors from '../selectors';

const mockPayload = {
  productList: [],
  cart: {},
  itemCart: {
    carts: {
      uuid_index: '',
      cart_no: '',
      cart_create_date: '',
      member_code: '',
      total_item: 0,
      total_amount: 0,
      cart_active: '',
      shopping_step: '',
      total_point: 0,
    },
    carts_detail: {
      uuid_index: '',
      cart_no: '',
      product_code: '',
      product_name: '',
      product_price: 0,
      product_unit: '',
      qty: 0,
      total_amount: 0,
      options: '',
      special_text: '',
      point: 0,
    },
  },
  search: {
    data: '',
  },
  response: {
    status: '',
    message: '',
  },
};

describe('selectShoppingDomain', () => {
  it('Expect mock state and initial state from selectShoppingDomain is equal', () => {
    const state = selectors.selectShoppingDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
