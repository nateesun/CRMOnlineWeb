import produce from 'immer';
import checkoutReducer from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('checkoutReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      cart_no: '',
      product: {
        product_code: '',
        qty: 0,
      },
      cartList: [],
      member_code: '',
      memberShipping: {},
      paymentData: {},
      img_upload: null,
      slipFileName: '',
      slipValidateStatus: '',
      addressForm: {},
      slipPath: '',
      response: {
        status: '',
        message: '',
      },
      branch: {},
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(checkoutReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the loadCart action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipValidateStatus = '';
      draft.cart_no = 'cartNo';
    });
    expect(checkoutReducer(state, actions.loadCart('cartNo'))).toEqual(
      expectedResult,
    );
  });
});
