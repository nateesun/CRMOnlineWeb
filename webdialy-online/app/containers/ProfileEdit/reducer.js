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
    dateOfBirth: '',
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
        break;
      case types.INIT_LOAD_PROFILE_MEMBER:
        draft.member.code = action.payload;
        break;
      case types.INIT_LOAD_PROFILE_MEMBER_SUCCESS:
        draft.member.code = action.payload.code;
        draft.member.prefix = action.payload.prefix;
        draft.member.firstName = action.payload.firstName;
        draft.member.lastName = action.payload.lastName;
        draft.member.mobile = action.payload.mobile;
        draft.member.dateOfBirth = action.payload.brithday;
        draft.member.email = action.payload.email;
        draft.member.password = action.payload.password;
        draft.member.lineId = action.payload.line_id;
        draft.member.loggedIn = true;
        break;
      case types.INIT_LOAD_PROFILE_MEMBER_ERROR:
        console.log('error loading:', action.payload);
        break;
      case types.EDIT_MEMBER:
        draft.member.code = action.payload.member.code;
        draft.member.prefix = action.payload.member.prefix;
        draft.member.firstName = action.payload.member.firstName;
        draft.member.lastName = action.payload.member.lastName;
        draft.member.mobile = action.payload.member.mobile;
        draft.member.dateOfBirth = action.payload.member.dateOfBirth;
        draft.member.email = action.payload.member.email;
        draft.member.password = action.payload.member.password;
        draft.member.lineId = action.payload.member.lineId;
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
