import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the databaseConfig state domain
 */

const selectDatabaseConfigDomain = state => state.databaseConfig || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DatabaseConfig
 */

const makeSelectDatabaseConfig = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectDatabaseConfigDomain,
    substate => substate.response,
  );

export {
  selectDatabaseConfigDomain,
  makeSelectDatabaseConfig,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
};
