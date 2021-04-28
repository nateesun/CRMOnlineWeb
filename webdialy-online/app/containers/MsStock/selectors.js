import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msStock state domain
 */

export const selectMsStockDomain = state => state.msStock || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsStock
 */

export const makeSelectMsStock = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMsStockDomain,
    substate => substate.response,
  );
