/*
 *
 * ProfileEdit reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  data: {},
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
        draft.data = {};
        break;
      case constants.INIT_LOAD:
        draft.email = action.payload;
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        break;
      case constants.EDIT_MEMBER:
        draft.data = action.payload;
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
