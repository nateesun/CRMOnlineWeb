import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

export const selectHomePageDomain = state => state.homepage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by homePage
 */

export const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );
export const makeSelectCompany = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.company,
  );
