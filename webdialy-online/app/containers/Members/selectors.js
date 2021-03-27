import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the members state domain
 */

const selectMembersDomain = state => state.members || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Members
 */

const makeSelectMembers = () =>
  createSelector(
    selectMembersDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.response,
  );
const makeSelectRolesList = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.rolesList,
  );

export {
  selectMembersDomain,
  makeSelectMembers,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectRolesList,
};
