import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the members state domain
 */

const selectMembersDomain = state => state.members || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Members
 */

const makeSelectMembers = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.data,
  );
const makeSelectStatus = () =>
  createSelector(
    selectMembersDomain,
    substate => substate.status,
  );

export { selectMembersDomain, makeSelectMembers, makeSelectStatus };
