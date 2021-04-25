import produce from 'immer';
import * as actions from '../actions';
import shoppingReducer, { initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('shoppingReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(shoppingReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.productList = [];
      draft.cart = {};
      draft.itemCart = {};
      draft.response = {};
    });
    expect(shoppingReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the loadProduct action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(shoppingReducer(state, actions.loadProduct())).toEqual(expectedResult);
  });
  it('should handle the loadProductSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.productList = [];
      draft.response.status = 'Load_Product_Success';
      draft.response.message = 'Load product success';
    });
    expect(shoppingReducer(state, actions.loadProductSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadProductError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Load_Product_Error';
      draft.response.message = 'Load product error!';
    });
    expect(shoppingReducer(state, actions.loadProductError())).toEqual(expectedResult);
  });
  // it('should handle the createItemCart action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.itemCart.carts = {
  //       uuid_index: v4(),
  //       cart_no: '',
  //       cart_create_date: moment().format('YYYY-MM-DD HH:mm:ss'),
  //       member_code: 'm001',
  //       total_item: 0,
  //       total_amount: 0,
  //       cart_active: 'Y',
  //       shopping_step: 'order',
  //       total_point: 0,
  //     };
  //     draft.itemCart.carts_detail = {
  //       uuid_index: v4(),
  //       cart_no: '',
  //       product_code: 'c001',
  //       product_name: 'p_name',
  //       product_price: 10,
  //       product_unit: '',
  //       qty: 1,
  //       total_amount: 1,
  //       options: [],
  //       special_text: '',
  //       point: 0,
  //     };
  //   });
  //   expect(
  //     shoppingReducer(
  //       state,
  //       actions.createItemCart({
  //         member_code: 'm001',
  //         code: 'c001',
  //         name: 'p_name',
  //         price_d: 10,
  //         unit_code_sale: '',
  //         qty: 1,
  //         total_amount: 1,
  //         options: [],
  //         special_text: '',
  //         point_total: 0,
  //       }),
  //     ),
  //   ).toEqual(expectedResult);
  // });
  it('should handle the createItemCartSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.cart = [];
      draft.response.status = 'Create_Cart_Success';
      draft.response.message = 'Create cart success';
    });
    expect(shoppingReducer(state, actions.createItemCartSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the createItemCartError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Create_Cart_Error';
      draft.response.message = 'Create cart error!';
    });
    expect(shoppingReducer(state, actions.createItemCartError())).toEqual(expectedResult);
  });
  // it('should handle the updateItemCart action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.itemCart.carts = {
  //       cart_no: 'cart01', // generate at service
  //     };
  //     draft.itemCart.carts_detail = {
  //       uuid_index: v4(),
  //       cart_no: 'cart01',
  //       product_code: 'c001',
  //       product_name: 'p_name',
  //       product_price: 10,
  //       product_unit: '',
  //       qty: 1,
  //       total_amount: 1,
  //       options: [],
  //       special_text: '',
  //       point: 0,
  //     };
  //   });
  //   expect(
  //     shoppingReducer(
  //       state,
  //       actions.updateItemCart({
  //         cart_no: 'cart01',
  //         member_code: 'm001',
  //         code: 'c001',
  //         name: 'p_name',
  //         price_d: 10,
  //         unit_code_sale: '',
  //         qty: 1,
  //         total_amount: 1,
  //         options: [],
  //         special_text: '',
  //         point_total: 0,
  //       }),
  //     ),
  //   ).toEqual(expectedResult);
  // });
  it('should handle the updateItemCartSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.cart = [];
      draft.response.status = 'Update_Cart_Success';
      draft.response.message = 'Update cart success';
    });
    expect(shoppingReducer(state, actions.updateItemCartSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the updateItemCartError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Update_Cart_Error';
      draft.response.message = 'Update cart error!';
    });
    expect(shoppingReducer(state, actions.updateItemCartError())).toEqual(expectedResult);
  });
  it('should handle the searchProduct action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.search.data = 'data';
    });
    expect(shoppingReducer(state, actions.searchProduct('data'))).toEqual(expectedResult);
  });
  it('should handle the searchProductSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.productList = [];
      draft.response.status = 'Search_Product_Success';
      draft.response.message = 'Search product success';
    });
    expect(shoppingReducer(state, actions.searchProductSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the searchProductError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Search_Product_Error';
      draft.response.message = 'Search product error!';
    });
    expect(shoppingReducer(state, actions.searchProductError())).toEqual(expectedResult);
  });
});
