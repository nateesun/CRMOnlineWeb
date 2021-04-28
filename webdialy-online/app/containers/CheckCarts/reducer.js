/*
 *
 * CheckCarts reducer
 *
 */
import produce from 'immer';
import * as loginConstants from 'containers/Login/constants';
import * as constants from './constants';

export const initialState = {
  list: [],
  data: {},
  page: 'LIST',
  status: null,
  message: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
  carts: {
    cart_no: '',
    cart_create_date: null,
    approve: '',
    reason: '',
    member_code: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const checkCartsReducer = (state = initialState, action) =>
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
      case constants.LOAD_VIEW_ORDER:
        draft.data = action.payload;
        break;
      case constants.LOAD_VIEW_ORDER_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Load data to view order error!';
        break;
      case constants.UPDATE_SHOPPING_STEP:
        draft.carts = action.payload;
        break;
      case constants.UPDATE_SHOPPING_STEP_SUCCESS:
        draft.response.status = 'Success';
        draft.response.message = 'Delete data success';
        break;
      case constants.UPDATE_SHOPPING_STEP_ERROR:
        draft.response.status = 'Error';
        draft.response.message = 'Load data to view order error!';
        break;
    }
  });

export default checkCartsReducer;
