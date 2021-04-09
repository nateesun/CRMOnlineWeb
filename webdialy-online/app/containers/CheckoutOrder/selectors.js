import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkout state domain
 */

const selectCheckoutDomain = state => state.checkout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Checkout
 */

const makeSelectCheckout = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate,
  );

const makeSelectCarts = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.cartList,
  );
const makeSelectCartsNo = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.cart_no,
  );
const makeSelectProduct = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.product,
  );
const makeSelectMemberCode = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.member_code,
  );
const makeSelectMemberShipping = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.memberShipping,
  );
const makeSelectFileUpload = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.img_upload,
  );
const makeSelectPaymentData = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.paymentData,
  );
const makeSelectSlipFile = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.slipFileName,
  );
const makeSelectSlipValidateStatus = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.slipValidateStatus,
  );
const makeSelectAddressForm = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.addressForm,
  );
const makeSelectSlipPath = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.slipPath,
  );
const makeSelectResponse = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.response,
  );
const makeSelectBranch = () =>
  createSelector(
    selectCheckoutDomain,
    substate => substate.branch,
  );

export {
  selectCheckoutDomain,
  makeSelectCheckout,
  makeSelectCarts,
  makeSelectCartsNo,
  makeSelectMemberCode,
  makeSelectMemberShipping,
  makeSelectFileUpload,
  makeSelectPaymentData,
  makeSelectSlipFile,
  makeSelectSlipValidateStatus,
  makeSelectProduct,
  makeSelectAddressForm,
  makeSelectSlipPath,
  makeSelectResponse,
  makeSelectBranch,
};
