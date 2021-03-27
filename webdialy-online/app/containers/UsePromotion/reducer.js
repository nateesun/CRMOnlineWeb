/*
 *
 * UsePromotion reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
import * as loginConstants from 'containers/Login/constants';

export const initialState = {
  list: [],
  data: {
    uuid_index: '',
    col1: '',
    col2: '',
    col3: '',
  },
  page: 'LIST',
  status: null,
  message: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
  profile: {},
};

/* eslint-disable default-case, no-param-reassign */
const usePromotionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginConstants.CHECK_LOGOUT:
      case constants.INIT_STATE:
        draft.list = [];
        draft.data = {};
        draft.page = 'LIST';
        draft.status = null;
        draft.message = null;
        draft.currentId = '';
        draft.response = {};
        break;
      case constants.CHANGE_PAGE:
        draft.page = action.payload;
        draft.response.status = '';
        draft.response.message = '';
        break;
      case constants.INIT_LOAD:
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Load data error!';
        break;
      case constants.SEARCH:
        break;
      case constants.SEARCH_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.SEARCH_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Search data error!';
        break;
      case constants.LOAD_PROFILE:
        break;
      case constants.LOAD_PROFILE_SUCCESS:
        draft.profile = action.payload;
        break;
      case constants.LOAD_PROFILE_ERROR:
        break;
    }
  });

export default usePromotionReducer;
