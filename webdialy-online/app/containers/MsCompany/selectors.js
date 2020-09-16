import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the msCompany state domain
 */

const selectMsCompanyDomain = state => state.msCompany || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MsCompany
 */

const makeSelectMsCompany = () =>
  createSelector(
    selectMsCompanyDomain,
    substate => substate,
  );

export default makeSelectMsCompany;
export { selectMsCompanyDomain };
