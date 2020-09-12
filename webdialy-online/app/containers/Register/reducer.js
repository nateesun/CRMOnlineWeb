/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_ERROR,
  ADD_REGISTER_MEMBER_SUCCESS,
} from './constants';

export const initialState = {
  member: {
    prefix: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    birthday: '',
    lineId: '',
  },
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.member = {};
        draft.status = '';
        draft.error = '';
        break;
      case ADD_REGISTER_MEMBER:
        draft.member.prefix = action.payload.member.prefix;
        draft.member.firstName = action.payload.member.firstName;
        draft.member.lastName = action.payload.member.lastName;
        draft.member.mobile = action.payload.member.mobile;
        draft.member.birthday = action.payload.member.birthday;
        draft.member.email = action.payload.member.email;
        draft.member.password = action.payload.member.password;
        draft.member.lineId = action.payload.member.lineId;
        break;
      case ADD_REGISTER_MEMBER_SUCCESS:
        draft.status = 'Success';
        break;
      case ADD_REGISTER_MEMBER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default registerReducer;
