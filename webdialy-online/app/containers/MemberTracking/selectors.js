import { createSelector } from 'reselect';

/**
 * Direct selector to the memberTracking state domain
 */

const selectMemberTrackingDomain = state => state.memberTracking;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MemberTracking
 */

const makeSelectMemberTracking = () =>
  createSelector(
    selectMemberTrackingDomain,
    substate => substate,
  );

export { selectMemberTrackingDomain, makeSelectMemberTracking };
