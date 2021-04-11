import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  rolesList: [],
  data: {
    uuid_index: '',
    code: '',
    email: '',
    first_name: '',
    last_name: '',
    member_role: '',
    total_score: 0,
    total_purchase: 0,
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

describe('selectMembersDomain', () => {
  it('Expect mock state and initial state from selectMembersDomain is equal', () => {
    const state = selectors.selectMembersDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
