import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ProfileShipping state domain
 */

export const selectProfileShippingDomain = state => state.profileShipping || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileShipping
 */

export const makeSelectProfileShipping = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate,
  );
export const makeSelectShipping = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.shipping,
  );
export const makeSelectAddressData = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.address,
  );
export const makeUpdateStatus = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.status,
  );
export const makeErrorUpdate = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.error,
  );
