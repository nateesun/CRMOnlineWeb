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

export {
  selectCheckoutDomain,
  makeSelectCheckout,
  makeSelectCarts,
  makeSelectCartsNo,
};
