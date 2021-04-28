import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authentication state domain
 */

export const selectAuthenticationDomain = state => state.authentication || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authentication
 */

export const makeSelectAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate,
  );

export const makeSelectAuthenticationAuth = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.auth,
  );

export const makeSelectAuthenticationAuthStatus = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.rolesStatus,
  );
