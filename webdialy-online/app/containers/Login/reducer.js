/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { INIT_LOAD_SUCCESS } from 'containers/Dashboard/constants';
import * as types from './constants';

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
      case types.DEFAULT_ACTION:
        draft.loginForm = {};
        draft.profile = {};
        draft.error = '';
        break;
      case types.CHECK_LOGIN:
        draft.loginForm.email = action.payload.email;
        draft.loginForm.password = action.payload.password;
        break;
      case types.CHECK_LOGIN_SUCCESS:
        draft.loggedIn = true;
        break;
      case types.CHECK_LOGIN_ERROR:
        draft.error = action.payload;
        draft.loggedIn = false;
        break;
      case types.CHECK_LOGOUT:
        break;
      case types.CHECK_LOGOUT_SUCCESS:
        draft.loginForm.email = '';
        draft.loginForm.password = '';
        draft.loggedIn = false;
        break;
      case types.CHECK_LOGOUT_ERROR:
        draft.error = action.error;
        break;
      case types.CLEAR_LOGIN:
        draft.error = '';
        draft.loginForm = {
          email: '',
          password: '',
        };
        break;
      case types.LOAD_PROFILE_TOKEN:
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
