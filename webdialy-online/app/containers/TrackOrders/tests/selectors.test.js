import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectTrackOrdersDomain', () => {
  it('Expect mock state and initial state from selectTrackOrdersDomain is equal', () => {
    const state = selectors.selectTrackOrdersDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
