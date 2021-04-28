import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectLanguage', () => {
  const domain = selectors.selectLanguage(mockPayload);
  it('Expect from selectHomePageDomain is equal', () => {
    const state = selectors.selectLanguage(mockPayload);
    expect(state).toEqual(domain);
  });
  it('Expect from makeSelectLocale is equal', () => {
    const state = selectors.makeSelectLocale();
    expect(state(mockPayload)).toEqual(domain.locale);
  });
});
