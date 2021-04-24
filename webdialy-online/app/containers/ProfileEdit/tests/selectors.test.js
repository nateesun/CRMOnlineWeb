import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileEditDomain', () => {
  it('Expect from selectProfileEditDomain is equal', () => {
    const state = selectors.selectProfileEditDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
