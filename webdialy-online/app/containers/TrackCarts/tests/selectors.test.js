import * as selectors from '../selectors';
import { initialState } from '../reducer';

const mockPayload = initialState;

describe('selectTrackCartsDomain', () => {
  it('Expect from selectTrackCartsDomain is equal', () => {
    const state = selectors.selectTrackCartsDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
