/*
 *
 * ProfileEdit reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  member: {
    code: '',
    prefix: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    birthday: '',
    lineId: '',
    loggedIn: false,
  },
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileEditReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        draft.status = '';
        draft.error = '';
        draft.member = {
          code: '',
          prefix: '',
          firstName: '',
          lastName: '',
          mobile: '',
          email: '',
          password: '',
          birthday: '',
          lineId: '',
        }
        break;
      case types.INIT_LOAD_PROFILE_MEMBER:
        draft.member.code = action.payload;
        break;
      case types.INIT_LOAD_PROFILE_MEMBER_SUCCESS:
        draft.member = action.payload;
        break;
      case types.INIT_LOAD_PROFILE_MEMBER_ERROR:
        break;
      case types.EDIT_MEMBER:
        draft.member.code = action.payload.member.code;
        draft.member.prefix = action.payload.member.prefix;
        draft.member.firstName = action.payload.member.firstName;
        draft.member.lastName = action.payload.member.lastName;
        draft.member.mobile = action.payload.member.mobile;
        draft.member.birthday = action.payload.member.birthday;
        draft.member.email = action.payload.member.email;
        draft.member.password = action.payload.member.password;
        draft.member.lineId = action.payload.member.line_id;
        break;
      case types.EDIT_MEMBER_SUCCESS:
        draft.status = 'Success';
        break;
      case types.EDIT_MEMBER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileEditReducer;
