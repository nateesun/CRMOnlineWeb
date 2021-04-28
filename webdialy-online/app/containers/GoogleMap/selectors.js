import { createSelector } from 'reselect';

/**
 * Direct selector to the googleMap state domain
 */

export const selectGoogleMapDomain = state => state.googleMap;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoogleMap
 */

export const makeSelectGoogleMap = () =>
  createSelector(
    selectGoogleMapDomain,
    substate => substate,
  );
