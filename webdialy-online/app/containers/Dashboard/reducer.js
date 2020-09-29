/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  profile: {},
  redeem: [],
  email: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
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
    }
  });

export default dashboardReducer;
