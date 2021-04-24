import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectTrackCartsDomain', () => {
  it('Expect mock state and initial state from selectTrackCartsDomain is equal', () => {
    const state = selectors.selectTrackCartsDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
