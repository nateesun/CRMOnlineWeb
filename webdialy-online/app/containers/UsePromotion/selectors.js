import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the usePromotion state domain
 */

export const selectUsePromotionDomain = state => state.usePromotion || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UsePromotion
 */

export const makeSelectUsePromotion = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.data,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectUsePromotionDomain,
    substate => substate.response,
  );
