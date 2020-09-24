/*
 *
 * ProfileChangePwd reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  data: {},
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileChangePwdReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        draft.status = '';
        draft.error = '';
        draft.data.old_password = '';
        draft.data.new_password = '';
        draft.data.confirm_password = '';
        break;
      case types.INIT_LOAD:
        draft.email = action.payload;
        break;
      case types.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case types.INIT_LOAD_ERROR:
        break;
      case types.UPDATE_PASSWORD:
        draft.data = action.payload;
        break;
      case types.UPDATE_PASSWORD_SUCCESS:
        draft.status = 'Success';
        break;
      case types.UPDATE_PASSWORD_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileChangePwdReducer;
