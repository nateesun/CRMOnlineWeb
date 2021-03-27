/*
 *
 * MemberTracking reducer
 *
 */
import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const memberTrackingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
    }
  });

export default memberTrackingReducer;
