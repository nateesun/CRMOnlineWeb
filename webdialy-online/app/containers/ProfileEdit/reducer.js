/*
 *
 * ProfileEdit reducer
 *
 */
import produce from 'immer';
import * as loginConstants from 'containers/Login/constants';
import * as constants from './constants';

export const initialState = {
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileEditReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.status = '';
        draft.error = '';
        draft.profile = {};
        break;
      case constants.EDIT_MEMBER:
        draft.profile = action.payload;
        break;
      case constants.EDIT_MEMBER_SUCCESS:
        draft.status = 'Success';
        break;
      case constants.EDIT_MEMBER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileEditReducer;
