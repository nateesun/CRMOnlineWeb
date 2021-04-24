import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shopping state domain
 */

export const selectShoppingDomain = state => state.shopping || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Shopping
 */

export const makeSelectShopping = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate,
  );

export const makeSelectProductList = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.productList,
  );

export const makeSelectItemCart = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.itemCart,
  );
export const makeSelectCart = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.cart,
  );
export const makeSelectSearchData = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.search,
  );
