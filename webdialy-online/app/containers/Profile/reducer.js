/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        break;
    }
  });

export default profileReducer;
