import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msCompany state domain
 */

export const selectMsCompanyDomain = state => state.msCompany || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsCompany
 */

export const makeSelectMsCompany = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.data,
  );
export const makeSelectFileUpload = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.img_upload,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.response,
  );
