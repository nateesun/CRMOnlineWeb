import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the usePromotion state domain
 */

const selectUsePromotionDomain = state => state.usePromotion || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UsePromotion
 */

const makeSelectUsePromotion = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.data,
  );
const makeSelectResponse = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.response,
  );
const makeSelectProfile = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.profile,
  );

export {
  selectUsePromotionDomain,
  makeSelectUsePromotion,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectProfile,
};
