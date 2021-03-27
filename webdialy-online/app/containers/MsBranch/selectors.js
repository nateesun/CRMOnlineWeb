import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msBranch state domain
 */

const selectMsBranchDomain = state => state.msBranch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsBranch
 */

const makeSelectMsBranch = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.response,
  );

export {
  selectMsBranchDomain,
  makeSelectMsBranch,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
