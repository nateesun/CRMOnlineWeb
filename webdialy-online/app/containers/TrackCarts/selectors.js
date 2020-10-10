import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trackCarts state domain
 */

const selectTrackCartsDomain = state => state.trackCarts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TrackCarts
 */

const makeSelectTrackCarts = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectTrackCartsDomain,
    substate => substate.response,
  );

export {
  selectTrackCartsDomain,
  makeSelectTrackCarts,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
