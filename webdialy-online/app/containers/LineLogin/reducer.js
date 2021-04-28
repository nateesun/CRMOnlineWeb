/*
 *
 * LineLogin reducer
 *
 */
import produce from 'immer';
import * as loginConstants from 'containers/Login/constants';
import * as constants from './constants';

export const initialState = {
  token: null,
  profile: {},
};

/* eslint-disable default-case, no-param-reassign */
const lineLoginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.token = null;
        draft.profile = {};
        break;
      case constants.VERIFY_TOKEN:
        draft.token = action.payload;
        break;
      case constants.VERIFY_TOKEN_SUCCESS:
        draft.profile = action.payload;
        break;
      case constants.VERIFY_TOKEN_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default lineLoginReducer;
