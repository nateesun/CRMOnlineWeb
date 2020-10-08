/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { INIT_LOAD_SUCCESS } from 'containers/Dashboard/constants';
import * as constants from './constants';

export const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  response: {
    status: null,
    message: null,
  },
  profile: {},
  loggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_STATE:
        draft.loginForm = {};
        draft.response = {};
        draft.profile = {};
        draft.loggedIn = false;
        draft.error = '';
        break;
      case constants.CHECK_LOGIN:
        draft.loginForm.email = action.payload.email;
        draft.loginForm.password = action.payload.password;
        break;
      case constants.CHECK_LOGIN_SUCCESS:
        draft.loggedIn = true;
        break;
      case constants.CHECK_LOGIN_ERROR:
        draft.error = action.payload;
        draft.loggedIn = false;
        break;
      case constants.CHECK_LOGOUT:
        break;
      case constants.CHECK_LOGOUT_SUCCESS:
        draft.loginForm.email = '';
        draft.loginForm.password = '';
        draft.loggedIn = false;
        break;
      case constants.CHECK_LOGOUT_ERROR:
        draft.error = action.error;
        break;
      case constants.CLEAR_LOGIN:
        draft.error = '';
        draft.loginForm = {
          email: '',
          password: '',
        };
        break;
      case constants.LOAD_PROFILE_TOKEN:
        draft.profile = action.payload;
        break;
      case INIT_LOAD_SUCCESS:
        if (action.payload.data) {
          draft.profile = action.payload.data;
        }
        break;
    }
  });

export default loginReducer;
