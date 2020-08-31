import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the MasterUI state domain
 */

const selectMasterUIDomain = state => state.MasterUI || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MasterUI
 */

const makeSelectMasterUI = () =>
  createSelector(
    selectMasterUIDomain,
    substate => substate,
  );

export default makeSelectMasterUI;
export { selectMasterUIDomain };
