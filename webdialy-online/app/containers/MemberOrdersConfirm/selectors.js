import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the memberOrdersConfirm state domain
 */

export const selectMemberOrdersConfirmDomain = state => state.memberOrdersConfirm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MemberOrdersConfirm
 */

export const makeSelectMemberOrdersConfirm = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate,
  );
export const makeSelectData = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.data,
  );
export const makeSelectOrderList = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.list,
  );
export const makeSelectConfirmData = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.confirmData,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.response,
  );
