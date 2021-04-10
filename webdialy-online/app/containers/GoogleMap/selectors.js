import { createSelector } from 'reselect';

/**
 * Direct selector to the googleMap state domain
 */

const selectGoogleMapDomain = state => state.googleMap;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoogleMap
 */

const makeSelectGoogleMap = () =>
  createSelector(
    selectGoogleMapDomain,
    substate => substate,
  );

export { selectGoogleMapDomain, makeSelectGoogleMap };
