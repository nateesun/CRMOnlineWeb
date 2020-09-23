import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msCompany state domain
 */

const selectMsCompanyDomain = state => state.msCompany || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsCompany
 */

const makeSelectMsCompany = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.response,
  );

export {
  selectMsCompanyDomain,
  makeSelectMsCompany,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
