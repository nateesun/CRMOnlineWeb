import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    code: '',
    name: '',
    map_latitude: 13.809992,
    map_longitude: 100.41313,
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

describe('selectMsBranchDomain', () => {
  it('Expect mock state and initial state from selectMsBranchDomain is equal', () => {
    const state = selectors.selectMsBranchDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
