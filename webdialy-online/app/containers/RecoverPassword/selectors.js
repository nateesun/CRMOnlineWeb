import { createSelector } from 'reselect';

/**
 * Direct selector to the recoverPassword state domain
 */

const selectRecoverPasswordDomain = state => state.recoverPassword;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RecoverPassword
 */

const makeSelectRecoverPassword = () =>
  createSelector(
    selectRecoverPasswordDomain,
    substate => substate,
  );

export { selectRecoverPasswordDomain, makeSelectRecoverPassword };
