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

const makeSelectProfile = () =>
  createSelector(
    selectMemberTrackingDomain,
    substate => substate.profile,
  );

export {
  selectMemberTrackingDomain,
  makeSelectMemberTracking,
  makeSelectProfile,
};
