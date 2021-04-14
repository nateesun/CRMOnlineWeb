import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the register state domain
 */

const selectRegisterDomain = state => state.register || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Register
 */

const makeSelectMember = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.data,
  );

const makeRegisterStatus = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.status,
  );

const makeErrorRegister = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.error,
  );

export { selectRegisterDomain, makeSelectMember, makeRegisterStatus, makeErrorRegister };
