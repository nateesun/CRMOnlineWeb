/*
 *
 * AddressShipping reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  data: {},
  address: {},
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const addressShippingReducer = (state = initialState, action) =>
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
        draft.data = action.payload;
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
        draft.data.map_latitude = action.payload.map_latitude;
        draft.data.map_longitude = action.payload.map_longitude;
        break;
    }
  });

export default addressShippingReducer;
