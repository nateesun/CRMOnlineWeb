/*
 *
 * ProfileEdit reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  data: {},
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
        draft.data = {};
        break;
      case types.INIT_LOAD:
        draft.email = action.payload;
        break;
      case types.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case types.INIT_LOAD_ERROR:
        break;
      case types.EDIT_MEMBER:
        draft.data = action.payload;
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
