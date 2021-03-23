import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ProfileShipping state domain
 */

const selectProfileShippingDomain = state => state.profileShipping || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileShipping
 */

const makeSelectProfileShipping = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate,
  );
const makeSelectProfileShippingInit = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.data,
  );
const makeSelectAddressData = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.address,
  );
const makeUpdateStatus = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.status,
  );
const makeErrorUpdate = () =>
  createSelector(
    selectProfileShippingDomain,
    substate => substate.error,
  );

export {
  selectProfileShippingDomain,
  makeSelectProfileShipping,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectProfileShippingInit,
  makeSelectAddressData,
};
