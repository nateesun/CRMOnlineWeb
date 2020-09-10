/*
 *
 * LineLogin reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  VERIFY_TOKEN,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_ERROR,
} from './constants';

export const initialState = {
  token: null,
  profile: {},
};

/* eslint-disable default-case, no-param-reassign */
const lineLoginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case VERIFY_TOKEN:
        draft.token = action.payload.token;
        break;
      case VERIFY_TOKEN_SUCCESS:
        draft.profile = action.payload.data;
        break;
      case VERIFY_TOKEN_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default lineLoginReducer;