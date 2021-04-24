import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectProfileDomain', () => {
  it('Expect from selectProfileDomain is equal', () => {
    const state = selectors.selectProfileDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
