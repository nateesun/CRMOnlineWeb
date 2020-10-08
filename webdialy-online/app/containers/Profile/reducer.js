/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  data: {},
  email: '',
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.data= {};
        draft.email= '';
        draft.error= '';
        break;
      case constants.INIT_LOAD:
        draft.email = action.payload;
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.data = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default profileReducer;
