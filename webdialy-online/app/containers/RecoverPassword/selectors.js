import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the recoverPassword state domain
 */

const selectRecoverPasswordDomain = state =>
  state.recoverPassword || initialState;

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

export default makeSelectRecoverPassword;
export { selectRecoverPasswordDomain };
