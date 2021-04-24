import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMsCompanyDomain', () => {
  it('Expect mock state and initial state from selectMsCompanyDomain is equal', () => {
    const state = selectors.selectMsCompanyDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
