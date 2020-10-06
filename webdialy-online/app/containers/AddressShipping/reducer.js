/*
 *
 * AddressShipping reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

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
      case types.DEFAULT_ACTION:
        draft.status = '';
        draft.error = '';
        draft.data = {};
        break;
      case types.INIT_LOAD:
        draft.member_code = action.payload;
        break;
      case types.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case types.INIT_LOAD_ERROR:
        break;
      case types.EDIT_SHIPPING:
        draft.address = action.payload;
        break;
      case types.EDIT_SHIPPING_SUCCESS:
        draft.status = 'Success';
        break;
      case types.EDIT_SHIPPING_ERROR:
        draft.error = action.payload;
        break;
      case types.CHANGE_MAPS_VALUE:
        draft.data.map_latitude = action.payload.map_latitude;
        draft.data.map_longitude = action.payload.map_longitude;
        break;
    }
  });

export default addressShippingReducer;
