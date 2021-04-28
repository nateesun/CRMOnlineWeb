/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  leftMenu: [],
  router: {
    location: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_LOAD:
        break;
      case constants.INIT_LOAD_SUCCESS:
        draft.leftMenu = action.payload;
        break;
      case constants.INIT_LOAD_ERROR:
        draft.leftMenu = [];
        draft.error = action.payload;
        break;
      case constants.CLEAR_MENU:
        draft.leftMenu = [];
        break;
    }
  });

export default appReducer;
