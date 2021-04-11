import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    code: '',
    name: '',
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

describe('selectMsRoleDomain', () => {
  it('Expect mock state and initial state from selectMsRoleDomain is equal', () => {
    const state = selectors.selectMsRoleDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
