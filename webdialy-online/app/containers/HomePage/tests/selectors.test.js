import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectHomePageDomain', () => {
  const domain = selectors.selectHomePageDomain(mockPayload);
  it('Expect from selectHomePageDomain is equal', () => {
    const state = selectors.selectHomePageDomain(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectHomePage is equal', () => {
    const state = selectors.makeSelectHomePage();
    expect(state(mockPayload)).toEqual(domain);
  });
  it('Expect from makeSelectCompany is equal', () => {
    const state = selectors.makeSelectCompany();
    expect(state(mockPayload)).toEqual(domain.company);
  });
});
