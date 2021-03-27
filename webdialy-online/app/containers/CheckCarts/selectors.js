import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkCarts state domain
 */

const selectCheckCartsDomain = state => state.checkCarts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckCarts
 */

const makeSelectCheckCarts = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.response,
  );
const makeSelectCartStatus = () =>
  createSelector(
    selectCheckCartsDomain,
    substate => substate.carts,
  );
export {
  selectCheckCartsDomain,
  makeSelectCheckCarts,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectCartStatus,
};
