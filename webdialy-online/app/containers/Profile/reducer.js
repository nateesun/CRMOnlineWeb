/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  company: {},
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
      case constants.INIT_LOAD_COMPANY:
        break;
      case constants.INIT_LOAD_COMPANY_SUCCESS:
        draft.company = action.payload;
        break;
      case constants.INIT_LOAD_COMPANY_ERROR:
        break;
    }
  });

export default profileReducer;
