import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLogin = state => state.login || initialState;

const makeSelectLogin = () =>
  createSelector(
    selectLogin,
    loginState => loginState.loginForm,
  );

const makeSelectProfile = () =>
  createSelector(
    selectLogin,
    loginState => loginState.profile,
  );

const makeLoginError = () =>
  createSelector(
    selectLogin,
    loginState => loginState.error,
  );

const makeSelectLoggedIn = () =>
  createSelector(
    selectLogin,
    loginState => loginState.loggedIn,
  );

export {
  selectLogin,
  makeSelectLogin,
  makeSelectProfile,
  makeLoginError,
  makeSelectLoggedIn,
};
