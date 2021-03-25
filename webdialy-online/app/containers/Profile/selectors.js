import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the profile state domain
 */

const selectProfileDomain = state => state.profile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Profile
 */
const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );
const makeSelectCompany = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.company,
  );
const makeSelectProfileData = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.profile,
  );

const makeUpdateStatus = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.status,
  );

const makeErrorUpdate = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.error,
  );

export {
  selectProfileDomain,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectProfile,
  makeSelectCompany,
  makeSelectProfileData,
};
