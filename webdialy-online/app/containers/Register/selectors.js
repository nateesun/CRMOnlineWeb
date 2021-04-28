import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the register state domain
 */

export const selectRegisterDomain = state => state.register || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Register
 */

export const makeSelectMember = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.data,
  );

export const makeRegisterStatus = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.status,
  );

export const makeErrorRegister = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.error,
  );
