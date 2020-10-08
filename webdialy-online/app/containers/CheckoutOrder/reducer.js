/*
 *
 * Checkout reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  cart_no: '',
  product: {
    product_code: '',
    qty: 0,
  },
  cartList: [],
  member_code: '',
  memberShipping: {},
  paymentData: {},
  img_upload: null,
  slipFileName: '',
  slipValidateStatus: '',
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
      case constants.LOAD_MEMBER_SHIPPING:
        draft.member_code = action.payload;
        break;
      case constants.LOAD_MEMBER_SHIPPING_SUCCESS:
        draft.memberShipping = action.payload;
        draft.response.status = 'Load_Member_Shipping_Success';
        draft.response.message = 'Load member shipping success';
        break;
      case constants.LOAD_MEMBER_SHIPPING_ERROR:
        draft.response.status = 'Load_Member_Shipping_Error';
        draft.response.message = 'Load member shipping error!';
        break;
      case constants.UPLOAD_IMG:
        draft.img_upload = action.payload;
        break;
      case constants.UPLOAD_IMG_SUCCESS:
        draft.response.status = 'Upload_Success';
        draft.response.message = 'Upload file image success';
        break;
      case constants.UPLOAD_IMG_ERROR:
        draft.response.status = 'Upload_Error';
        draft.response.message = 'Upload file image error!';
        break;
      case constants.SET_PAYMENT_DATA:
        draft.paymentData = action.payload;
        break;
      case constants.SET_PAYMENT_DATA_SUCCESS:
        break;
      case constants.SET_PAYMENT_DATA_ERROR:
        break;
      case constants.CHECK_SLIP:
        draft.slipFileName = action.payload;
        break;
      case constants.CHECK_SLIP_SUCCESS:
        if (action.payload.length > 40) {
          draft.slipValidateStatus = 'Success';
          draft.response.message = 'Validate slip file image success';
        } else {
          draft.slipValidateStatus = 'Warning';
          draft.response.message = 'Data in slip incorrect format';
        }
        break;
      case constants.CHECK_SLIP_ERROR:
        draft.slipValidateStatus = 'Error';
        draft.response.message = 'Validate slip file image error!';
        break;
      case constants.DELETE_ITEM_CART:
        draft.product.product_code = action.payload;
      case constants.DELETE_ITEM_CART_ERROR:
        break;
      case constants.UPDATE_ITEM_CART:
        draft.product = action.payload;
      case constants.UPDATE_ITEM_CART_ERROR:
        break;
    }
  });

export default checkoutReducer;
