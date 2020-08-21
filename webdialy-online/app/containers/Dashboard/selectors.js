import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboard state domain
 */

const selectDashboardDomain = state => state.dashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */

const makeSelectDashboard = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate,
  );
const makeSelectProfile = () =>
  createSelector(
    selectDashboardDomain,
    substate => substate.profile,
  );

export { selectDashboardDomain, makeSelectDashboard, makeSelectProfile };
