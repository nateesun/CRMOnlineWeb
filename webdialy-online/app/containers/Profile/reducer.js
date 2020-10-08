/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  data: {},
  email: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.INIT_STATE:
        draft.data= {};
        draft.email= '';
        draft.error= '';
        break;
      case types.INIT_LOAD=
        draft.email = action.payload;
        break;
      case types.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case types.INIT_LOAD_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileReducer;
