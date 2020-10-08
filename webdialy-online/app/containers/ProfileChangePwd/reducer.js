/*
 *
 * ProfileChangePwd reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  data: {},
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileChangePwdReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
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
      case constants.UPDATE_PASSWORD:
        draft.data = action.payload;
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
