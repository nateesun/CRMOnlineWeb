import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profile state domain
 */

export const selectProfileDomain = state => state.profile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */
export const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );
export const makeSelectCompany = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.company,
  );
export const makeUpdateStatus = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.status,
  );

export const makeErrorUpdate = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.error,
  );
