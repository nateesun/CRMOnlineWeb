import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the googleMap state domain
 */

const selectGoogleMapDomain = state => state.googleMap || initialState;

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

export default makeSelectGoogleMap;
export { selectGoogleMapDomain };
