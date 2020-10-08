/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
const { v4 } = require('uuid');
import * as types from './constants';

export const initialState = {
  profile: {},
  redeem: [],
  redeemPoint: {
    uuid_index: '',
    product_code: '',
    redeem_code: '',
  },
  email: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.INIT_STATE:
        draft.profile= {};
        draft.redeem= [];
        draft.redeemPoint= {};
        draft.email= '';
        draft.error= '';
        break;
      case types.INIT_LOAD:
        draft.email = action.payload;
        break;
      case types.INIT_LOAD_SUCCESS:
        draft.profile = action.payload;
        break;
      case types.INIT_LOAD_ERROR:
        draft.error = action.payload;
        break;
      case types.LOAD_REDEEM:
        break;
      case types.LOAD_REDEEM_SUCCESS:
        draft.redeem = action.payload;
        break;
      case types.LOAD_REDEEM_ERROR:
        draft.error = action.payload;
        break;
      case types.CREATE_REDEEM:
        draft.redeemPoint.product_code = action.payload;
        draft.redeemPoint.uuid_index = v4();
        break;
      case types.CREATE_REDEEM_SUCCESS:
        draft.redeemPoint.redeem_code = action.payload;
        break;
      case types.CREATE_REDEEM_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default dashboardReducer;
