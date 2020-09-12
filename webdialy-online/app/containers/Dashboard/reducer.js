/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  profile: {},
  memberCode: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.INIT_LOAD:
        draft.memberCode = action.payload;
        break;
    }
  });

export default dashboardReducer;
