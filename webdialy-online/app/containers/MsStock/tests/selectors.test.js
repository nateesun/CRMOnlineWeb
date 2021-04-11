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

describe('selectMsStockDomain', () => {
  it('Expect mock state and initial state from selectMsStockDomain is equal', () => {
    const state = selectors.selectMsStockDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
