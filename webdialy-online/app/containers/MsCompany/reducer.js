/*
 *
 * MsCompany reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const msCompanyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_LOAD:
        break;
      case constants.INIT_LOAD_SUCCESS:
        break;
      case constants.INIT_LOAD_ERROR:
        break;
      case constants.CREATE_ITEM:
        break;
      case constants.CREATE_ITEM_SUCCESS:
        break;
      case constants.CREATE_ITEM_ERROR:
        break;
      case constants.UPDATE_ITEM:
        break;
      case constants.UPDATE_ITEM_SUCCESS:
        break;
      case constants.UPDATE_ITEM_ERROR:
        break;
      case constants.DELETE_ITEM:
        break;
      case constants.DELETE_ITEM_SUCCESS:
        break;
      case constants.DELETE_ITEM_ERROR:
        break;
      case constants.GET_ITEM:
        break;
      case constants.GET_ITEM_SUCCESS:
        break;
      case constants.GET_ITEM_ERROR:
        break;
    }
  });

export default msCompanyReducer;
