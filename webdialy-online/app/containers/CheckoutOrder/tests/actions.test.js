import * as actions from '../actions';
import * as constants from '../constants';

describe('Checkout actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
    describe('loadCart Action', () => {
      it('has a type of LOAD_CART', () => {
        const expected = {
          type: constants.LOAD_CART,
          payload: 'load',
        };
        expect(actions.loadCart('load')).toEqual(expected);
      });
    });
    describe('loadCart Action', () => {
      it('has a type of LOAD_CART_SUCCESS', () => {
        const expected = {
          type: constants.LOAD_CART_SUCCESS,
          payload: 'success',
        };
        expect(actions.loadCartSuccess('success')).toEqual(expected);
      });
    });
    describe('loadCart Action', () => {
      it('has a type of LOAD_CART_ERROR', () => {
        const expected = {
          type: constants.LOAD_CART_ERROR,
          payload: 'error',
        };
        expect(actions.loadCartError('error')).toEqual(expected);
      });
    });
    describe('loadMemberShipping Action', () => {
      it('has a type of LOAD_MEMBER_SHIPPING', () => {
        const expected = {
          type: constants.LOAD_MEMBER_SHIPPING,
        };
        expect(actions.loadMemberShipping()).toEqual(expected);
      });
    });
    describe('loadMemberShippingSuccess Action', () => {
      it('has a type of LOAD_MEMBER_SHIPPING_SUCCESS', () => {
        const expected = {
          type: constants.LOAD_MEMBER_SHIPPING_SUCCESS,
          payload: 'success',
        };
        expect(actions.loadMemberShippingSuccess('success')).toEqual(expected);
      });
    });
    describe('loadMemberShippingError Action', () => {
      it('has a type of LOAD_MEMBER_SHIPPING_ERROR', () => {
        const expected = {
          type: constants.LOAD_MEMBER_SHIPPING_ERROR,
          payload: 'error',
        };
        expect(actions.loadMemberShippingError('error')).toEqual(expected);
      });
    });
    describe('uploadImage Action', () => {
      it('has a type of UPLOAD_IMG', () => {
        const expected = {
          type: constants.UPLOAD_IMG,
          payload: 'load',
        };
        expect(actions.uploadImage('load')).toEqual(expected);
      });
    });
    describe('uploadImageSuccess Action', () => {
      it('has a type of UPLOAD_IMG_SUCCESS', () => {
        const expected = {
          type: constants.UPLOAD_IMG_SUCCESS,
          payload: 'success',
        };
        expect(actions.uploadImageSuccess('success')).toEqual(expected);
      });
    });
    describe('uploadImageError Action', () => {
      it('has a type of UPLOAD_IMG_ERROR', () => {
        const expected = {
          type: constants.UPLOAD_IMG_ERROR,
          payload: 'error',
        };
        expect(actions.uploadImageError('error')).toEqual(expected);
      });
    });
    describe('setPaymentData Action', () => {
      it('has a type of SET_PAYMENT_DATA', () => {
        const expected = {
          type: constants.SET_PAYMENT_DATA,
          payload: 'load',
        };
        expect(actions.setPaymentData('load')).toEqual(expected);
      });
    });
    describe('setPaymentDataSuccess Action', () => {
      it('has a type of SET_PAYMENT_DATA_SUCCESS', () => {
        const expected = {
          type: constants.SET_PAYMENT_DATA_SUCCESS,
          payload: 'success',
        };
        expect(actions.setPaymentDataSuccess('success')).toEqual(expected);
      });
    });
    describe('setPaymentDataError Action', () => {
      it('has a type of SET_PAYMENT_DATA_ERROR', () => {
        const expected = {
          type: constants.SET_PAYMENT_DATA_ERROR,
          payload: 'error',
        };
        expect(actions.setPaymentDataError('error')).toEqual(expected);
      });
    });
    describe('checkSlip Action', () => {
      it('has a type of CHECK_SLIP', () => {
        const expected = {
          type: constants.CHECK_SLIP,
          payload: 'check',
        };
        expect(actions.checkSlip('check')).toEqual(expected);
      });
    });
    describe('checkSlipSuccess Action', () => {
      it('has a type of CHECK_SLIP_SUCCESS', () => {
        const expected = {
          type: constants.CHECK_SLIP_SUCCESS,
          payload: 'success',
        };
        expect(actions.checkSlipSuccess('success')).toEqual(expected);
      });
    });
    describe('checkSlipError Action', () => {
      it('has a type of CHECK_SLIP_ERROR', () => {
        const expected = {
          type: constants.CHECK_SLIP_ERROR,
          payload: 'error',
        };
        expect(actions.checkSlipError('error')).toEqual(expected);
      });
    });
    describe('deleteItemCart Action', () => {
      it('has a type of DELETE_ITEM_CART', () => {
        const expected = {
          type: constants.DELETE_ITEM_CART,
          payload: 'check',
        };
        expect(actions.deleteItemCart('check')).toEqual(expected);
      });
    });
    describe('deleteItemCartSuccess Action', () => {
      it('has a type of DELETE_ITEM_CART_SUCCESS', () => {
        const expected = {
          type: constants.DELETE_ITEM_CART_SUCCESS,
          payload: 'success',
        };
        expect(actions.deleteItemCartSuccess('success')).toEqual(expected);
      });
    });
    describe('deleteItemCartError Action', () => {
      it('has a type of DELETE_ITEM_CART_ERROR', () => {
        const expected = {
          type: constants.DELETE_ITEM_CART_ERROR,
          payload: 'error',
        };
        expect(actions.deleteItemCartError('error')).toEqual(expected);
      });
    });
    describe('updateItemCart Action', () => {
      it('has a type of UPDATE_ITEM_CART', () => {
        const expected = {
          type: constants.UPDATE_ITEM_CART,
          payload: 'check',
        };
        expect(actions.updateItemCart('check')).toEqual(expected);
      });
    });
    describe('updateItemCartSuccess Action', () => {
      it('has a type of UPDATE_ITEM_CART_SUCCESS', () => {
        const expected = {
          type: constants.UPDATE_ITEM_CART_SUCCESS,
          payload: 'success',
        };
        expect(actions.updateItemCartSuccess('success')).toEqual(expected);
      });
    });
    describe('updateItemCartError Action', () => {
      it('has a type of UPDATE_ITEM_CART_ERROR', () => {
        const expected = {
          type: constants.UPDATE_ITEM_CART_ERROR,
          payload: 'error',
        };
        expect(actions.updateItemCartError('error')).toEqual(expected);
      });
    });
    describe('updateAddressForm Action', () => {
      it('has a type of UPDATE_ADDRESS_FORM', () => {
        const expected = {
          type: constants.UPDATE_ADDRESS_FORM,
          payload: 'check',
        };
        expect(actions.updateAddressForm('check')).toEqual(expected);
      });
    });
    describe('updateAddressFormSuccess Action', () => {
      it('has a type of UPDATE_ADDRESS_FORM_SUCCESS', () => {
        const expected = {
          type: constants.UPDATE_ADDRESS_FORM_SUCCESS,
          payload: 'success',
        };
        expect(actions.updateAddressFormSuccess('success')).toEqual(expected);
      });
    });
    describe('updateAddressFormError Action', () => {
      it('has a type of UPDATE_ADDRESS_FORM_ERROR', () => {
        const expected = {
          type: constants.UPDATE_ADDRESS_FORM_ERROR,
          payload: 'error',
        };
        expect(actions.updateAddressFormError('error')).toEqual(expected);
      });
    });
    describe('updateAddressForm Action', () => {
      it('has a type of UPDATE_SHOPPING_STEP', () => {
        const expected = {
          type: constants.UPDATE_SHOPPING_STEP,
          payload: 'check',
        };
        expect(actions.updateShoppingStep('check')).toEqual(expected);
      });
    });
    describe('updateShoppingStepSuccess Action', () => {
      it('has a type of UPDATE_SHOPPING_STEP_SUCCESS', () => {
        const expected = {
          type: constants.UPDATE_SHOPPING_STEP_SUCCESS,
          payload: 'success',
        };
        expect(actions.updateShoppingStepSuccess('success')).toEqual(expected);
      });
    });
    describe('updateShoppingStepError Action', () => {
      it('has a type of UPDATE_SHOPPING_STEP_ERROR', () => {
        const expected = {
          type: constants.UPDATE_SHOPPING_STEP_ERROR,
          payload: 'error',
        };
        expect(actions.updateShoppingStepError('error')).toEqual(expected);
      });
    });
    describe('updateSlipPath Action', () => {
      it('has a type of UPDATE_SLIP_PATH', () => {
        const expected = {
          type: constants.UPDATE_SLIP_PATH,
          payload: 'check',
        };
        expect(actions.updateSlipPath('check')).toEqual(expected);
      });
    });
    describe('updateSlipPathSuccess Action', () => {
      it('has a type of UPDATE_SLIP_PATH_SUCCESS', () => {
        const expected = {
          type: constants.UPDATE_SLIP_PATH_SUCCESS,
          payload: 'success',
        };
        expect(actions.updateSlipPathSuccess('success')).toEqual(expected);
      });
    });
    describe('updateSlipPathError Action', () => {
      it('has a type of UPDATE_SLIP_PATH_ERROR', () => {
        const expected = {
          type: constants.UPDATE_SLIP_PATH_ERROR,
          payload: 'error',
        };
        expect(actions.updateSlipPathError('error')).toEqual(expected);
      });
    });
    describe('loadBranchLocation Action', () => {
      it('has a type of LOAD_BRANCH_LOCATION', () => {
        const expected = {
          type: constants.LOAD_BRANCH_LOCATION,
        };
        expect(actions.loadBranchLocation()).toEqual(expected);
      });
    });
    describe('loadBranchLocationSuccess Action', () => {
      it('has a type of LOAD_BRANCH_LOCATION_SUCCESS', () => {
        const expected = {
          type: constants.LOAD_BRANCH_LOCATION_SUCCESS,
          payload: 'success',
        };
        expect(actions.loadBranchLocationSuccess('success')).toEqual(expected);
      });
    });
    describe('loadBranchLocationError Action', () => {
      it('has a type of LOAD_BRANCH_LOCATION_ERROR', () => {
        const expected = {
          type: constants.LOAD_BRANCH_LOCATION_ERROR,
          payload: 'error',
        };
        expect(actions.loadBranchLocationError('error')).toEqual(expected);
      });
    });
  });
});
