import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectRouter = state => state.router;

export const selectAppDomain = state => state.app || initialState;

export const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    substate => substate.location,
  );

export const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

export const makeSelectLeftMenu = () =>
  createSelector(
    selectAppDomain,
    substate => substate.leftMenu,
  );
