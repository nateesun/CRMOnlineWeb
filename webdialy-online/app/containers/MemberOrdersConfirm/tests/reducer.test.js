import memberOrdersConfirmReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('memberOrdersConfirmReducer', () => {
  let state;
  beforeEach(() => {
    state = {
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
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(memberOrdersConfirmReducer(undefined, {})).toEqual(expectedResult);
  });
});
