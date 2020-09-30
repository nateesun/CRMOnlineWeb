/*
 *
 * Shopping reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  productList: [],
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
        draft.response.status = 'Upload_Success';
        draft.response.message = 'Upload file image success';
        break;
      case constants.LOAD_PRODUCT_ERROR:
        draft.response.status = 'Upload_Error';
        draft.response.message = 'Upload file image error!';
        break;
    }
  });

export default shoppingReducer;
