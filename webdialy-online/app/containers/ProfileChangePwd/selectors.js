import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileChangePwd state domain
 */

export const selectProfileChangePwdDomain = state => state.profileChangePwd || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileChangePwd
 */

export const makeSelectProfile = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate,
  );
export const makeSelectEditForm = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.editForm,
  );
export const makeUpdateStatus = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.status,
  );
export const makeErrorUpdate = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.error,
  );
