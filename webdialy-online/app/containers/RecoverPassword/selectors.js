import { createSelector } from 'reselect';

/**
 * Direct selector to the recoverPassword state domain
 */

export const selectRecoverPasswordDomain = state => state.recoverPassword;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecoverPassword
 */

export const makeSelectRecoverPassword = () =>
  createSelector(
    selectRecoverPasswordDomain,
    substate => substate,
  );
