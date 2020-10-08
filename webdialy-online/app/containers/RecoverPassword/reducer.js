/*
 *
 * RecoverPassword reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const recoverPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.INIT_STATE:
        break;
    }
  });

export default recoverPasswordReducer;
