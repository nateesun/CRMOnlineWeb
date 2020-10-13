/*
 *
 * MemberOrdersConfirm reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  data: {
    database: '',
    email: '',
    password: '',
    cart_no: '',
  },
  list: {},
  confirmData: {
    status: '',
    signature: ''
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
      case constants.LOGIN_TO_CONFIRM:
        draft.data = action.payload;
        break;
      case constants.LOGIN_TO_CONFIRM_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.LOGIN_TO_CONFIRM_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Validate login data error!';
        break;
      case constants.CONFIRM_ORDERS:
        draft.confirmData = action.payload;
        break;
      case constants.CONFIRM_ORDERS_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.CONFIRM_ORDERS_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Update status confirm order error';
        break;
    }
  });

export default memberOrdersConfirmReducer;
