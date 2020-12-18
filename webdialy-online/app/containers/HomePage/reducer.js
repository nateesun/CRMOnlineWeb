/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  company: {},
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_STATE:
        break;
      case constants.INIT_LOAD:
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.company = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        draft.error = action.payload;
        break;
    }
  });

export default homePageReducer;
