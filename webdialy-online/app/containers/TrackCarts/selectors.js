import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trackCarts state domain
 */

export const selectTrackCartsDomain = state => state.trackCarts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TrackCarts
 */

export const makeSelectTrackCarts = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.response,
  );
