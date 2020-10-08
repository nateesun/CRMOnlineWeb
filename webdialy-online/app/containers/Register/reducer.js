/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import {
  INIT_STATE,
  ADD_REGISTER_MEMBER,
  ADD_REGISTER_MEMBER_ERROR,
  ADD_REGISTER_MEMBER_SUCCESS,
} from './constants';
const { v4 } = require('uuid');

export const initialState = {
  data: {
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
      case INIT_STATE:
        draft.data = {};
        draft.status = '';
        draft.error = '';
        break;
      case ADD_REGISTER_MEMBER:
        draft.data = action.payload;
        draft.data.uuid_index = v4();
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
