import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msStock state domain
 */

const selectMsStockDomain = state => state.msStock || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsStock
 */

const makeSelectMsStock = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.response,
  );

export {
  selectMsStockDomain,
  makeSelectMsStock,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
