import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectRegisterDomain', () => {
  it('Expect from selectRegisterDomain is equal', () => {
    const state = selectors.selectRegisterDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
