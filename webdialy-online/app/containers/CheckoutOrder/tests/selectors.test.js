import * as selectors from '../selectors';

const mockPayload = {
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

describe('selectCheckoutDomain', () => {
  it('Expect mock state and initial state from selectCheckoutDomain is equal', () => {
    const state = selectors.selectCheckoutDomain(mockPayload);
    expect(state).toEqual(mockPayload);
  });
  it('Expect mock state and initial state from makeSelectCheckout is equal', () => {
    const dataSelector = selectors.makeSelectCheckout(mockPayload);
    expect(dataSelector(mockPayload)).toEqual(mockPayload);
  });
});
