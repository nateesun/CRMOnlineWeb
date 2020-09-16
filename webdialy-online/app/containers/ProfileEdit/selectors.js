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

const makeSelectProfileEdit = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate,
  );
const makeSelectMember = () =>
  createSelector(
    selectProfileEditDomain,
    substate => substate.member,
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
  makeSelectProfileEdit,
  makeSelectMember,
  makeUpdateStatus,
  makeErrorUpdate,
};
