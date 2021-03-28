/*
 *
 * ProfileShipping reducer
 *
 */
import produce from 'immer';
const { v4 } = require('uuid');
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  shipping: {
    address_type: "",
    member_prefix: "",
    member_code: "",
    member_name: "",
    member_lastname: "",
    address1: "",
    address2: "",
    province: "",
    district: "",
    sub_district: "",
    postcode: "",
    map_latitude: 13.752434,
    map_longitude: 100.494122,
  },
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
        if (Object.keys(action.payload).length === 0) {
          draft.shipping = { ...action.payload, create: true, uuid_index: v4() }
        } else {
          draft.shipping = action.payload;
        }
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
        draft.shipping.map_latitude = action.payload.map_latitude || 13.752434;
        draft.shipping.map_longitude = action.payload.map_longitude || 100.494122;
        break;
    }
  });

export default profileShippingReducer;
