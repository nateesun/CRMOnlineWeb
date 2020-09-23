import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msEmployee state domain
 */

const selectMsEmployeeDomain = state => state.msEmployee || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsEmployee
 */

const makeSelectMsEmployee = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsEmployeeDomain,
    substate => substate.response,
  );

export {
  selectMsEmployeeDomain,
  makeSelectMsEmployee,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
