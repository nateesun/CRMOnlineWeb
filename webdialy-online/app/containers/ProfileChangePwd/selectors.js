import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileChangePwd state domain
 */

const selectProfileChangePwdDomain = state => state.profileChangePwd || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileChangePwd
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate,
  );
const makeSelectEditForm = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.editForm,
  );
const makeUpdateStatus = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.status,
  );
const makeErrorUpdate = () =>
  createSelector(
    selectProfileChangePwdDomain,
    substate => substate.error,
  );

export {
  selectProfileChangePwdDomain,
  makeSelectProfile,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectEditForm,
};
