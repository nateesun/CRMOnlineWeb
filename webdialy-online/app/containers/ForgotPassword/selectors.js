import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forgotPassword state domain
 */

const selectForgotPasswordDomain = state =>
  state.forgotPassword || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ForgotPassword
 */

const makeSelectForgotPassword = () =>
  createSelector(
    selectForgotPasswordDomain,
    substate => substate,
  );

const makeSelectRequest = () =>
  createSelector(
    selectForgotPasswordDomain,
    substate => substate.request,
  );

export { 
  selectForgotPasswordDomain, 
  makeSelectForgotPassword,
  makeSelectRequest,
};
