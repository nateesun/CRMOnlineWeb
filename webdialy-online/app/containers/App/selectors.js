import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.router;
const selectAppDomain = state => state.app || initialState;

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

const makeSelectLeftMenu = () =>
  createSelector(
    selectAppDomain,
    substate => substate.leftMenu,
  );

export { makeSelectLocation, makeSelectApp, makeSelectLeftMenu };
