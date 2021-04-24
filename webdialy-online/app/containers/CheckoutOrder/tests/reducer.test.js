import produce from 'immer';
import checkoutReducer, { initialState } from '../reducer';
import * as actions from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('checkoutReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(checkoutReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the initState action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.cartList = [];
      draft.cart_no = '';
      draft.product = {};
      draft.member_code = '';
      draft.memberShipping = {};
      draft.paymentData = {};
      draft.img_upload = null;
      draft.slipFileName = '';
      draft.response = {};
    });
    expect(checkoutReducer(state, actions.initState())).toEqual(expectedResult);
  });
  it('should handle the loadCart action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipValidateStatus = '';
      draft.cart_no = 'cartNo';
    });
    expect(checkoutReducer(state, actions.loadCart('cartNo'))).toEqual(expectedResult);
  });
  it('should handle the loadCartSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.cartList = [];
      draft.response.status = 'Load_Order_Success';
      draft.response.message = 'Load order success';
    });
    expect(checkoutReducer(state, actions.loadCartSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the loadCartError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Load_Order_Error';
      draft.response.message = 'Load order error!';
    });
    expect(checkoutReducer(state, actions.loadCartError([]))).toEqual(expectedResult);
  });
  it('should handle the loadMemberShipping action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.loadMemberShipping())).toEqual(expectedResult);
  });
  it('should handle the loadMemberShippingSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.memberShipping = [1];
      draft.response.status = 'Load_Member_Shipping_Success';
      draft.response.message = 'Load member shipping success';
    });
    expect(checkoutReducer(state, actions.loadMemberShippingSuccess([1]))).toEqual(expectedResult);
  });
  it('should handle the loadMemberShippingError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Load_Member_Shipping_Error';
      draft.response.message = 'Load member shipping error!';
    });
    expect(checkoutReducer(state, actions.loadMemberShippingError([]))).toEqual(expectedResult);
  });
  it('should handle the uploadImage action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.img_upload = '/';
    });
    expect(checkoutReducer(state, actions.uploadImage('/'))).toEqual(expectedResult);
  });
  it('should handle the uploadImageSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Upload_Success';
      draft.response.message = 'Upload file image success';
    });
    expect(checkoutReducer(state, actions.uploadImageSuccess())).toEqual(expectedResult);
  });
  it('should handle the uploadImageError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response.status = 'Upload_Error';
      draft.response.message = 'Upload file image error!';
    });
    expect(checkoutReducer(state, actions.uploadImageError([]))).toEqual(expectedResult);
  });
  it('should handle the setPaymentData action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.paymentData = 'paymentData';
    });
    expect(checkoutReducer(state, actions.setPaymentData('paymentData'))).toEqual(expectedResult);
  });
  it('should handle the setPaymentDataError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.setPaymentDataError())).toEqual(expectedResult);
  });
  it('should handle the checkSlip action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipFileName = 'slipFileName';
    });
    expect(checkoutReducer(state, actions.checkSlip('slipFileName'))).toEqual(expectedResult);
  });
  it('should handle the checkSlipSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipValidateStatus = 'Warning';
      draft.response.message = 'Data in slip incorrect format';
    });
    expect(checkoutReducer(state, actions.checkSlipSuccess([]))).toEqual(expectedResult);
  });
  it('should handle the checkSlipError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipValidateStatus = 'Error';
      draft.response.message = 'Validate slip file image error!';
    });
    expect(checkoutReducer(state, actions.checkSlipError([]))).toEqual(expectedResult);
  });
  it('should handle the deleteItemCart action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.product.product_code = 'p001';
    });
    expect(checkoutReducer(state, actions.deleteItemCart('p001'))).toEqual(expectedResult);
  });
  it('should handle the deleteItemCartError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.deleteItemCartError())).toEqual(expectedResult);
  });
  it('should handle the updateItemCart action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.product = {};
    });
    expect(checkoutReducer(state, actions.updateItemCart({}))).toEqual(expectedResult);
  });
  it('should handle the updateItemCartError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.updateItemCartError())).toEqual(expectedResult);
  });
  // it('should handle the updateAddressForm action correctly', () => {
  //   const expectedResult = produce(state, draft => {
  //     draft.addressForm = {};
  //     draft.addressForm.uuid_index = v4();
  //   });
  //   expect(checkoutReducer(state, actions.updateAddressForm({}))).toEqual(expectedResult);
  // });
  it('should handle the updateAddressFormSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response = {
        status: 'Success_Update_Address',
        message: 'Update Address Success',
      };
    });
    expect(checkoutReducer(state, actions.updateAddressFormSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateAddressFormError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.updateAddressFormError([]))).toEqual(expectedResult);
  });
  it('should handle the updateSlipPath action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slipPath = '/';
    });
    expect(checkoutReducer(state, actions.updateSlipPath('/'))).toEqual(expectedResult);
  });
  it('should handle the updateSlipPathSuccess action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.updateSlipPathSuccess())).toEqual(expectedResult);
  });
  it('should handle the updateSlipPathError action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.updateSlipPathError([]))).toEqual(expectedResult);
  });
  it('should handle the loadBranchLocation action correctly', () => {
    const expectedResult = produce(state, () => {});
    expect(checkoutReducer(state, actions.loadBranchLocation('/'))).toEqual(expectedResult);
  });
  it('should handle the loadBranchLocationSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.branch = 'b001';
    });
    expect(checkoutReducer(state, actions.loadBranchLocationSuccess('b001'))).toEqual(
      expectedResult,
    );
  });
  it('should handle the loadBranchLocationError action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.response = {
        status: 'Load_Branch_Location_Error',
        message: 'Load branch locaation error',
      };
    });
    expect(checkoutReducer(state, actions.loadBranchLocationError())).toEqual(expectedResult);
  });
});
