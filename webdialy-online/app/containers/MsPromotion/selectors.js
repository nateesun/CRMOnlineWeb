import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msPromotion state domain
 */

export const selectMsPromotionDomain = state => state.msPromotion || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsPromotion
 */

export const makeSelectMsPromotion = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate,
  );

export const makeSelectCurrentId = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.currentId,
  );
export const makeSelectPage = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.page,
  );
export const makeSelectListItems = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.list,
  );
export const makeSelectForm = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.data,
  );
export const makeSelectFileUpload = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.img_upload,
  );
export const makeSelectResponse = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.response,
  );
