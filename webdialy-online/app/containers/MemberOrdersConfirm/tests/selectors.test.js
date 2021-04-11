import * as selectors from '../selectors';

const mockPayload = {
  data: {
    cart_no: '',
    database: '',
  },
  list: {},
  confirmData: {
    member_mobile: '',
    order_no: '',
    signature: '',
    order_status: '',
  },
  response: {
    status: null,
    message: null,
  },
};

describe('selectMemberOrdersConfirmDomain', () => {
  it('Expect mock state and initial state from selectMemberOrdersConfirmDomain is equal', () => {
    const state = selectors.selectMemberOrdersConfirmDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
});
