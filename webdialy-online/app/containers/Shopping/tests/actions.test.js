import * as actions from '../actions';
import * as constants from '../constants';

describe('Shopping actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('loadProduct action', () => {
    it('has a type of LOAD_PRODUCT', () => {
      const expected = {
        type: constants.LOAD_PRODUCT,
      };
      expect(actions.loadProduct()).toEqual(expected);
    });
  });
  describe('loadProductSuccess action', () => {
    it('has a type of LOAD_PRODUCT_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_PRODUCT_SUCCESS,
      };
      expect(actions.loadProductSuccess()).toEqual(expected);
    });
  });
  describe('loadProductError action', () => {
    it('has a type of LOAD_PRODUCT_ERROR', () => {
      const expected = {
        type: constants.LOAD_PRODUCT_ERROR,
      };
      expect(actions.loadProductError()).toEqual(expected);
    });
  });
  describe('createItemCart action', () => {
    it('has a type of CREATE_ITEM_CART', () => {
      const expected = {
        type: constants.CREATE_ITEM_CART,
        payload: 'create',
      };
      expect(actions.createItemCart('create')).toEqual(expected);
    });
  });
  describe('createItemCartSuccess action', () => {
    it('has a type of CREATE_ITEM_CART_SUCCESS', () => {
      const expected = {
        type: constants.CREATE_ITEM_CART_SUCCESS,
        payload: 'success',
      };
      expect(actions.createItemCartSuccess('success')).toEqual(expected);
    });
  });
  describe('createItemCartError action', () => {
    it('has a type of CREATE_ITEM_CART_ERROR', () => {
      const expected = {
        type: constants.CREATE_ITEM_CART_ERROR,
        payload: 'error',
      };
      expect(actions.createItemCartError('error')).toEqual(expected);
    });
  });
  describe('updateItemCart action', () => {
    it('has a type of UPDATE_ITEM_CART', () => {
      const expected = {
        type: constants.UPDATE_ITEM_CART,
        payload: 'update',
      };
      expect(actions.updateItemCart('update')).toEqual(expected);
    });
  });
  describe('updateItemCartSuccess action', () => {
    it('has a type of UPDATE_ITEM_CART_SUCCESS', () => {
      const expected = {
        type: constants.UPDATE_ITEM_CART_SUCCESS,
        payload: 'success',
      };
      expect(actions.updateItemCartSuccess('success')).toEqual(expected);
    });
  });
  describe('updateItemCartError action', () => {
    it('has a type of UPDATE_ITEM_CART_ERROR', () => {
      const expected = {
        type: constants.UPDATE_ITEM_CART_ERROR,
        payload: 'error',
      };
      expect(actions.updateItemCartError('error')).toEqual(expected);
    });
  });
  describe('searchProduct action', () => {
    it('has a type of SEARCH_PRODUCT', () => {
      const expected = {
        type: constants.SEARCH_PRODUCT,
        payload: 'search',
      };
      expect(actions.searchProduct('search')).toEqual(expected);
    });
  });
  describe('searchProductSuccess action', () => {
    it('has a type of SEARCH_PRODUCT_SUCCESS', () => {
      const expected = {
        type: constants.SEARCH_PRODUCT_SUCCESS,
        payload: 'success',
      };
      expect(actions.searchProductSuccess('success')).toEqual(expected);
    });
  });
  describe('searchProductError action', () => {
    it('has a type of SEARCH_PRODUCT_ERROR', () => {
      const expected = {
        type: constants.SEARCH_PRODUCT_ERROR,
        payload: 'error',
      };
      expect(actions.searchProductError('error')).toEqual(expected);
    });
  });
});
