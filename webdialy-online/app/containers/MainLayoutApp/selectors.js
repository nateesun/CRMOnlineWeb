import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainLayoutApp state domain
 */

const selectMainLayoutAppDomain = state => state.mainLayoutApp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainLayoutApp
 */

const makeSelectMainLayoutApp = () =>
  createSelector(
    selectMainLayoutAppDomain,
    substate => substate,
  );

export default makeSelectMainLayoutApp;
export { selectMainLayoutAppDomain };
