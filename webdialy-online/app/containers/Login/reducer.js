/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  CHECK_LOGIN,
  CHECK_LOGIN_ERROR,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGOUT,
  CHECK_LOGOUT_ERROR,
  CHECK_LOGOUT_SUCCESS,
  CLEAR_LOGIN,
  LOAD_PROFILE_TOKEN,
} from './constants';

export const initialState = {
  loginForm: {
    email: '',
    password: '',
  },
  profile: {},
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.loginForm = {};
        draft.profile = {};
        draft.error = '';
        break;
      case CHECK_LOGIN:
        draft.loginForm.email = action.payload.email;
        draft.loginForm.password = action.payload.password;
        break;
      case CHECK_LOGIN_SUCCESS:
        draft.profile = action.payload.data;
        break;
      case CHECK_LOGIN_ERROR:
        draft.error = action.payload;
        break;
      case CHECK_LOGOUT:
        draft.profile = {}
        break;
      case CHECK_LOGOUT_SUCCESS:
        draft.loginForm.email = '';
        draft.loginForm.password = '';
        break;
      case CHECK_LOGOUT_ERROR:
        draft.error = action.error;
        break;
      case CLEAR_LOGIN:
        draft.error = '';
        draft.loginForm = {
          email: '',
          password: '',
        };
        break;
      case LOAD_PROFILE_TOKEN:
        draft.profile = action.payload;
        break;
    }
  });

export default loginReducer;
