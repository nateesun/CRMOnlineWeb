import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkCarts state domain
 */

export const selectCheckCartsDomain = state => state.checkCarts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckCarts
 */

export const makeSelectCheckCarts = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.response,
  );
export const makeSelectCartStatus = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.carts,
  );
