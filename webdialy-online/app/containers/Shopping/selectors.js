import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shopping state domain
 */

const selectShoppingDomain = state => state.shopping || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Shopping
 */

const makeSelectShopping = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate,
  );

const makeSelectProductList = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.productList,
  );

const makeSelectItemCart = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.itemCart,
  );
const makeSelectCart = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.cart,
  );
const makeSelectSearchData = () =>
  createSelector(
    selectShoppingDomain,
    substate => substate.search,
  );

export {
  makeSelectShopping,
  selectShoppingDomain,
  makeSelectProductList,
  makeSelectItemCart,
  makeSelectCart,
  makeSelectSearchData,
};
