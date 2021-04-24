import { createSelector } from 'reselect';

/**
 * Direct selector to the logout state domain
 */

export const selectLogoutDomain = state => state.logout;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Logout
 */

export const makeSelectLogout = () =>
  createSelector(
    selectLogoutDomain,
    substate => substate,
  );
