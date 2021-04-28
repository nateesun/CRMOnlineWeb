import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forgotPassword state domain
 */

export const selectForgotPasswordDomain = state => state.forgotPassword || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ForgotPassword
 */

export const makeSelectForgotPassword = () =>
  createSelector(
    selectForgotPasswordDomain,
    substate => substate,
  );

export const makeSelectRequest = () =>
  createSelector(
    selectForgotPasswordDomain,
    substate => substate.request,
  );
