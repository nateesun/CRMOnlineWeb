import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lineLogin state domain
 */

const selectLineLoginDomain = state => state.lineLogin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LineLogin
 */

const makeSelectLineLogin = () =>
  createSelector(
    selectLineLoginDomain,
    substate => substate,
  );

const makeSelectLineLoginProfile = () =>
  createSelector(
    selectLineLoginDomain,
    substate => substate.profile,
  );

export {
  selectLineLoginDomain,
  makeSelectLineLogin,
  makeSelectLineLoginProfile,
};
