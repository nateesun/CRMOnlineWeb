/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  profile: {},
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
    }
  });

export default dashboardReducer;
