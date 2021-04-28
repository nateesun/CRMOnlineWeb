import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the members state domain
 */

export const selectMembersDomain = state => state.members || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Members
 */

export const makeSelectMembers = () =>
  createSelector(
    selectMembersDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.response,
  );
export const makeSelectRolesList = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.rolesList,
  );
