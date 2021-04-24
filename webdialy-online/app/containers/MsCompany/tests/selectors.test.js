import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsCompanyDomain', () => {
  it('Expect from selectMsCompanyDomain is equal', () => {
    const state = selectors.selectMsCompanyDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
