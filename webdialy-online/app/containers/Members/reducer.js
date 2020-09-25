/*
 *
 * Members reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';
const { v4 } = require('uuid');

export const initialState = {
  list: [],
  data: {
    uuid_index: '',
    code: '',
    email: '',
    total_score: 0,
    total_purchase: 0,
  },
  page: 'LIST',
  status: null,
  message: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const membersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
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
      case constants.LOAD_EDIT:
        draft.data = action.payload;
        break;
      case constants.LOAD_EDIT_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.LOAD_EDIT_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Load data to edit error!';
        break;
      case constants.CREATE_ITEM:
        draft.data = action.payload;
        draft.data.uuid_index = v4();
        break;
      case constants.CREATE_ITEM_SUCCESS:
        draft.response.status = 'Success';
        draft.response.message = 'Create item success';
        break;
      case constants.CREATE_ITEM_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Create data error!';
        break;
      case constants.UPDATE_ITEM:
        draft.data = action.payload;
        break;
      case constants.UPDATE_ITEM_SUCCESS:
        draft.response.status = 'Success';
        draft.response.message = 'Update data success';
        break;
      case constants.UPDATE_ITEM_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Update data error!';
        break;
      case constants.DELETE_ITEM:
        draft.data.uuid_index = action.payload;
        break;
      case constants.DELETE_ITEM_SUCCESS:
        draft.response.status = 'Success';
        draft.response.message = 'Delete data success';
        break;
      case constants.DELETE_ITEM_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Delete data error!';
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
      case constants.LOAD_VIEW:
        draft.data = action.payload;
        break;
      case constants.LOAD_VIEW_SUCCESS:
        draft.list = action.payload;
        break;
      case constants.LOAD_VIEW_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Load data to view error!';
        break;
    }
  });

export default membersReducer;
