/*
 *
 * MemberOrdersConfirm reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  data: {
    cart_no: '',
    database: '',
  },
  list: {},
  confirmData: {
    member_mobile: '',
    order_no: '',
    signature: '',
    order_status: '',
  },
  response: {
    status: null,
    message: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const memberOrdersConfirmReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_LOAD:
        draft.data.cart_no = action.payload.cart_no;
        draft.data.database = action.payload.database;
        draft.response = {};
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.list = action.payload;
        draft.response = {};
        break;
      case constants.INIT_LOAD_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Error load initial data';
        break;
      case constants.CONFIRM_ORDERS:
        draft.confirmData = action.payload;
        draft.response = {};
        break;
      case constants.CONFIRM_ORDERS_SUCCESS:
        draft.response.status = 'Success';
        break;
      case constants.CONFIRM_ORDERS_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Update status confirm order error';
        break;
    }
  });

export default memberOrdersConfirmReducer;
