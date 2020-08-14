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
    registerState => registerState.member,
  );

const makeRegisterStatus = () =>
  createSelector(
    selectRegisterDomain,
    registerState => registerState.status,
  );

export { selectRegisterDomain, makeSelectMember, makeRegisterStatus };
