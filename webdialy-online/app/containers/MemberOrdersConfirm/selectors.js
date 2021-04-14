import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the memberOrdersConfirm state domain
 */

const selectMemberOrdersConfirmDomain = state => state.memberOrdersConfirm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MemberOrdersConfirm
 */

const makeSelectMemberOrdersConfirm = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate,
  );
const makeSelectData = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.data,
  );
const makeSelectOrderList = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.list,
  );
const makeSelectConfirmData = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.confirmData,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMemberOrdersConfirmDomain,
    substate => substate.response,
  );

export {
  selectMemberOrdersConfirmDomain,
  makeSelectMemberOrdersConfirm,
  makeSelectData,
  makeSelectOrderList,
  makeSelectConfirmData,
  makeSelectResponse,
};
