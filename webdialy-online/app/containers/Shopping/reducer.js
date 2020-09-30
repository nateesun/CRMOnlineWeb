/*
 *
 * Shopping reducer
 *
 */
import produce from 'immer';
import moment from 'moment';
const { v4 } = require('uuid');
import * as constants from './constants';

export const initialState = {
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
    }
  },
  response: {
    status: '',
    message: '',
  }
};

/* eslint-disable default-case, no-param-reassign */
const shoppingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOAD_PRODUCT:
        break;
      case constants.LOAD_PRODUCT_SUCCESS:
        draft.productList = action.payload;
        draft.response.status = 'Load_Product_Success';
        draft.response.message = 'Load product success';
        break;
      case constants.LOAD_PRODUCT_ERROR:
        draft.response.status = 'Load_Product_Error';
        draft.response.message = 'Load product error!';
        break;
      case constants.CREATE_ITEM_CART:
        draft.itemCart.carts = {
          uuid_index: v4(),
          cart_no: '', // generate at service
          cart_create_date: moment().format('YYYY-MM-DD HH:mm:ss'),
          member_code: action.payload.member_code,
          total_item: 0, // generate at service
          total_amount: 0, // generate at service
          cart_active: 'Y',
          shopping_step: 'order',
          total_point: 0,
        };
        draft.itemCart.carts_detail = {
          uuid_index: v4(),
          cart_no: '',
          product_code: action.payload.code,
          product_name: action.payload.name,
          product_price: action.payload.price_d,
          product_unit: action.payload.unit_code_sale,
          qty: action.payload.qty,
          total_amount: action.payload.total_amount,
          options: action.payload.options,
          special_text: action.payload.special_text,
          point: action.payload.point_total,
        }
        break;
      case constants.CREATE_ITEM_CART_SUCCESS:
        draft.cart = action.payload;
        draft.response.status = 'Create_Cart_Success';
        draft.response.message = 'Create cart success';
        break;
      case constants.CREATE_ITEM_CART_ERROR:
        draft.response.status = 'Create_Cart_Error';
        draft.response.message = 'Create cart error!';
        break;
    }
  });

export default shoppingReducer;
