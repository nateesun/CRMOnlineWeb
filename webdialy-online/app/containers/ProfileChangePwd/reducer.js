/*
 *
 * ProfileChangePwd reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  username: '',
  editForm: {},
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileChangePwdReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.status = '';
        draft.error = '';
        break;
      case constants.UPDATE_PASSWORD:
        draft.editForm = action.payload;
        break;
      case constants.UPDATE_PASSWORD_SUCCESS:
        draft.status = 'Success';
        break;
      case constants.UPDATE_PASSWORD_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileChangePwdReducer;
