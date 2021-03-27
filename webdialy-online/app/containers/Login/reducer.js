/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import { setCookie } from 'react-use-cookie';

export const initialState = {
  loginForm: {
    email: '',
    mobile: '',
    password: '',
    type: '',
  },
  response: {
    status: null,
    message: null,
  },
  profile: {},
  loggedIn: false,
  queryDb: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_DATABASE:
        draft.queryDb = action.payload;
        break;
      case constants.INIT_STATE:
        draft.loginForm = {};
        draft.response = {};
        draft.profile = {};
        draft.loggedIn = false;
        draft.error = '';
        break;
      case constants.CHECK_LOGIN:
        draft.loginForm.email = action.payload.email;
        draft.loginForm.mobile = action.payload.mobile;
        draft.loginForm.password = action.payload.password;
        draft.loginForm.type = action.payload.type;
        break;
      case constants.CHECK_LOGIN_SUCCESS:
        setCookie('token', JSON.stringify(action.payload.email || action.payload.mobile));
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
        draft.loginForm.mobile = '';
        draft.loginForm.password = '';
        draft.loginForm.type = 'mobile';
        draft.loggedIn = false;
        break;
      case constants.CHECK_LOGOUT_ERROR:
        draft.error = action.error;
        break;
      case constants.CLEAR_LOGIN:
        draft.error = '';
        draft.loginForm = {
          email: '',
          mobile: '',
          password: '',
          type: 'mobile',
        };
        break;
      case constants.LOAD_PROFILE_TOKEN:
        draft.profile = action.payload;
        break;
    }
  });

export default loginReducer;
