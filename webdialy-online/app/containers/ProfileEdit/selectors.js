import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileEdit state domain
 */

export const selectProfileEditDomain = state => state.profileEdit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileEdit
 */

export const makeSelectProfile = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate,
  );
export const makeUpdateStatus = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.status,
  );
export const makeErrorUpdate = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.error,
  );
