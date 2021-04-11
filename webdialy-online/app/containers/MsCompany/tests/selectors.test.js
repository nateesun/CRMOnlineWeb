import * as selectors from '../selectors';

const mockPayload = {
  list: [],
  data: {
    uuid_index: '',
    code: '',
    name: '',
    line_official_id: '',
  },
  page: 'LIST',
  status: null,
  message: null,
  img_upload: null,
  currentId: '',
  response: {
    status: null,
    message: null,
  },
};

describe('selectMsCompanyDomain', () => {
  it('Expect mock state and initial state from selectMsCompanyDomain is equal', () => {
    const state = selectors.selectMsCompanyDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
