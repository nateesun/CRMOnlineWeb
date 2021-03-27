import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profileEdit state domain
 */

const selectProfileEditDomain = state => state.profileEdit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileEdit
 */

const makeSelectProfile = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate,
  );
const makeSelectProfileData = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.profile,
  );
const makeUpdateStatus = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.status,
  );
const makeErrorUpdate = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.error,
  );

export {
  selectProfileEditDomain,
  makeSelectProfile,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectProfileData,
};
