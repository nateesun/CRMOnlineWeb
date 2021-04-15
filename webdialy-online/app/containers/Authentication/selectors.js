import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authentication state domain
 */

const selectAuthenticationDomain = state => state.authentication || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authentication
 */

const makeSelectAuthentication = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate,
  );

const makeSelectAuthenticationAuth = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.auth,
  );

const makeSelectAuthenticationAuthStatus = () =>
  createSelector(
    selectAuthenticationDomain,
    substate => substate.rolesStatus,
  );

export {
  selectAuthenticationDomain,
  makeSelectAuthentication,
  makeSelectAuthenticationAuth,
  makeSelectAuthenticationAuthStatus,
};
