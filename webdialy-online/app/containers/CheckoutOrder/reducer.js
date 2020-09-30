/*
 *
 * Checkout reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  cart_no: '',
  cartList: [],
  response: {
    status: '',
    message: '',
  }
};

/* eslint-disable default-case, no-param-reassign */
const checkoutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOAD_CART:
        draft.cart_no = action.payload;
        break;
      case constants.LOAD_CART_SUCCESS:
        draft.cartList = action.payload;
        draft.response.status = 'Load_Order_Success';
        draft.response.message = 'Load order success';
        break;
      case constants.LOAD_CART_ERROR:
        draft.response.status = 'Load_Order_Error';
        draft.response.message = 'Load order error!';
        break;
    }
  });

export default checkoutReducer;
