import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trackOrders state domain
 */

export const selectTrackOrdersDomain = state => state.trackOrders || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TrackOrders
 */

export const makeSelectTrackOrders = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.response,
  );
