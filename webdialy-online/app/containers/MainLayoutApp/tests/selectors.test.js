import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMainLayoutAppDomain', () => {
  it('Expect from selectMainLayoutAppDomain is equal', () => {
    const state = selectors.selectMainLayoutAppDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
