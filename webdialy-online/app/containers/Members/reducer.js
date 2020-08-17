/*
 *
 * Members reducer
 *
 */
import produce, { isDraft } from 'immer';
import { 
  DEFAULT_ACTION,
  LOAD_MEMBERS,
  LOAD_MEMBERS_SUCCESS,
  LOAD_MEMBERS_ERROR,
  DELETE_MEMBER,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_ERROR,
  EDIT_MEMBER,
  EDIT_MEMBER_SUCCESS,
  EDIT_MEMBER_ERROR
} from './constants';

export const initialState = {
  data: [],
  status: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const membersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case LOAD_MEMBERS:
        break;
      case LOAD_MEMBERS_SUCCESS:
        draft.data = action.payload;
        break;
      case LOAD_MEMBERS_ERROR:
        draft.error = action.payload;
        break;
      case DELETE_MEMBER:
        draft.member_code = action.payload;
        break;
      case DELETE_MEMBER_SUCCESS:
        draft.status = action.payload;
        break;
      case DELETE_MEMBER_ERROR:
        draft.error = action.payload;
        break;
      case EDIT_MEMBER:
        draft.member_code = action.payload;
        break;
      case EDIT_MEMBER_SUCCESS:
        draft.status = action.payload;
        break;
      case EDIT_MEMBER_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default membersReducer;
