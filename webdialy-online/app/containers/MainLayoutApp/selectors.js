import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainLayoutApp state domain
 */

export const selectMainLayoutAppDomain = state => state.mainLayoutApp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainLayoutApp
 */

export const makeSelectMainLayoutApp = () =>
  createSelector(
    selectMainLayoutAppDomain,
    substate => substate,
  );

export const makeSelectProfile = () =>
  createSelector(
    selectMainLayoutAppDomain,
    substate => substate.profile,
  );
