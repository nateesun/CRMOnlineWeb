import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msProduct state domain
 */

const selectMsProductDomain = state => state.msProduct || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsProduct
 */

const makeSelectMsProduct = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.response,
  );
const makeSelectFileUpload = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.img_upload,
  );
const makeSelectProductImport = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.productImports,
  );
const makeSelectProductImportHeader = () =>
  createSelector(
    selectMsProductDomain,
    substate => substate.productImportHeaders,
  );

export {
  selectMsProductDomain,
  makeSelectMsProduct,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectFileUpload,
  makeSelectProductImport,
  makeSelectProductImportHeader,
};
