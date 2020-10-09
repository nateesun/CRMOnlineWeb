import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trackOrders state domain
 */

const selectTrackOrdersDomain = state => state.trackOrders || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TrackOrders
 */

const makeSelectTrackOrders = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectTrackOrdersDomain,
    substate => substate.response,
  );

export {
  selectTrackOrdersDomain,
  makeSelectTrackOrders,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
