/*
 *
 * Authentication reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  auth: {
    user: '',
    uriPath: '',
  },
  rolesStatus: '',
  response: {
    msg: '',
    error: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const authenticationReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOAD_ROLE:
        draft.auth = action.payload;
        break;
      case constants.LOAD_ROLE_SUCCESS:
        draft.rolesStatus = action.payload;
        draft.response.msg = 'Success';
        break;
      case constants.LOAD_ROLE_ERROR:
        draft.rolesStatus = 'not_allow';
        draft.response.error = action.payload;
        break;
    }
  });

export default authenticationReducer;
