import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msBranch state domain
 */

export const selectMsBranchDomain = state => state.msBranch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsBranch
 */

export const makeSelectMsBranch = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMsBranchDomain,
    substate => substate.response,
  );
