/*
 *
 * Register reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
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
      case constants.INIT_STATE:
        draft.data = {};
        draft.status = '';
        draft.error = '';
        break;
      case constants.ADD_REGISTER_MEMBER:
        draft.data = action.payload;
        draft.data.uuid_index = v4();
        break;
      case constants.ADD_REGISTER_MEMBER_SUCCESS:
        draft.status = 'Success';
        break;
      case constants.ADD_REGISTER_MEMBER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default registerReducer;
