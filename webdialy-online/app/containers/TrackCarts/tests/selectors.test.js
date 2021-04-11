import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    col1: '',
    col2: '',
    col3: '',
  },
  page: 'LIST',
  status: null,
  message: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
};

describe('selectTrackCartsDomain', () => {
  it('Expect mock state and initial state from selectTrackCartsDomain is equal', () => {
    const state = selectors.selectTrackCartsDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
