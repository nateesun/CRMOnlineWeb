import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homepage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by homePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );
const makeSelectCompany = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.company,
  );

export { selectHomePageDomain, makeSelectHomePage, makeSelectCompany };
