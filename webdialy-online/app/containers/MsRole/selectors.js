import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msRole state domain
 */

export const selectMsRoleDomain = state => state.msRole || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsRole
 */

export const makeSelectMsRole = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.response,
  );
