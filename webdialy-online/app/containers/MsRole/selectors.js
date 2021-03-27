import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msRole state domain
 */

const selectMsRoleDomain = state => state.msRole || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsRole
 */

const makeSelectMsRole = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsRoleDomain,
    substate => substate.response,
  );

export {
  selectMsRoleDomain,
  makeSelectMsRole,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
