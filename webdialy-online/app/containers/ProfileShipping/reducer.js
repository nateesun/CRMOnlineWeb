/*
 *
 * ProfileShipping reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  shipping: {},
  address: {},
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileShippingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.status = '';
        draft.error = '';
        draft.data = {};
        break;
      case constants.INIT_LOAD:
        draft.member_code = action.payload;
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.shipping = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        break;
      case constants.EDIT_SHIPPING:
        draft.address = action.payload;
        break;
      case constants.EDIT_SHIPPING_SUCCESS:
        draft.status = 'Success';
        break;
      case constants.EDIT_SHIPPING_ERROR:
        draft.error = action.payload;
        break;
      case constants.CHANGE_MAPS_VALUE:
        draft.shipping.map_latitude = action.payload.map_latitude;
        draft.shipping.map_longitude = action.payload.map_longitude;
        break;
    }
  });

export default profileShippingReducer;
