import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the databaseConfig state domain
 */

export const selectDatabaseConfigDomain = state => state.databaseConfig || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DatabaseConfig
 */

export const makeSelectDatabaseConfig = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.response,
  );
