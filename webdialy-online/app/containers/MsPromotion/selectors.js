import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msPromotion state domain
 */

const selectMsPromotionDomain = state => state.msPromotion || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsPromotion
 */

const makeSelectMsPromotion = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate,
  );

const makeSelectCurrentId = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.currentId,
  );
const makeSelectPage = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.page,
  );
const makeSelectListItems = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.list,
  );
const makeSelectForm = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.data,
  );
const makeSelectFileUpload = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.img_upload,
  );
const makeSelectResponse = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.response,
  );
const makeSelectProfile = () =>
  createSelector(
    selectMsPromotionDomain,
    substate => substate.profile,
  );

export {
  selectMsPromotionDomain,
  makeSelectMsPromotion,
  makeSelectPage,
  makeSelectListItems,
  makeSelectForm,
  makeSelectCurrentId,
  makeSelectResponse,
  makeSelectFileUpload,
  makeSelectProfile,
};
