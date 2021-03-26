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
const makeSelectFileUpload = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.img_upload,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.response,
  );
const makeSelectProfile = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate.profile,
  );

export {
  selectMsCompanyDomain,
  makeSelectMsCompany,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectFileUpload,
  makeSelectProfile,
};
