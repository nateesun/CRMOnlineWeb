import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectMembersDomain', () => {
  it('Expect from selectMembersDomain is equal', () => {
    const state = selectors.selectMembersDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
