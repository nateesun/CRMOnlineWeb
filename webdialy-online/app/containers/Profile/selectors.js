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
const makeSelectMember = () =>
  createSelector(
    selectProfileDomain,
    editState => editState.member,
  );

const makeUpdateStatus = () =>
  createSelector(
    selectProfileDomain,
    editState => editState.status,
  );

const makeErrorUpdate = () =>
  createSelector(
    selectProfileDomain,
    editState => editState.error,
  );

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

export {
  selectProfileDomain,
  makeSelectMember,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectProfile,
};
