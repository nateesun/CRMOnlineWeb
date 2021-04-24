import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the lineLogin state domain
 */

export const selectLineLoginDomain = state => state.lineLogin || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LineLogin
 */

export const makeSelectLineLogin = () =>
  createSelector(
    selectLineLoginDomain,
    substate => substate,
  );

export const makeSelectLineLoginProfile = () =>
  createSelector(
    selectLineLoginDomain,
    substate => substate.profile,
  );
