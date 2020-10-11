import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addressShipping state domain
 */

const selectAddressShippingDomain = state => state.addressShipping || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddressShipping
 */

const makeSelectAddressShipping = () =>
  createSelector(
    selectAddressShippingDomain,
    substate => substate,
  );
const makeSelectAddressShippingInit = () =>
  createSelector(
    selectAddressShippingDomain,
    substate => substate.data,
  );
const makeSelectAddressData = () =>
  createSelector(
    selectAddressShippingDomain,
    substate => substate.address,
  );
const makeUpdateStatus = () =>
  createSelector(
    selectAddressShippingDomain,
    substate => substate.status,
  );
const makeErrorUpdate = () =>
  createSelector(
    selectAddressShippingDomain,
    substate => substate.error,
  );

export {
  selectAddressShippingDomain,
  makeSelectAddressShipping,
  makeUpdateStatus,
  makeErrorUpdate,
  makeSelectAddressShippingInit,
  makeSelectAddressData,
};
