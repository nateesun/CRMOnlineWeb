/*
 *
 * MemberTracking reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  profile: {},
};

/* eslint-disable default-case, no-param-reassign */
const memberTrackingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOAD_PROFILE:
        draft.profile = {}
        break;
      case constants.LOAD_PROFILE_SUCCESS:
        draft.profile = action.payload;
        break;
      case constants.LOAD_PROFILE_ERROR:
        draft.profile = {}
        break;
    }
  });

export default memberTrackingReducer;
