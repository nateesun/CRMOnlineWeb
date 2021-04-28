import { createSelector } from 'reselect';

/**
 * Direct selector to the memberTracking state domain
 */

export const selectMemberTrackingDomain = state => state.memberTracking;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MemberTracking
 */

export const makeSelectMemberTracking = () =>
  createSelector(
    selectMemberTrackingDomain,
    substate => substate,
  );
