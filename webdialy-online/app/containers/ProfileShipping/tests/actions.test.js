import * as actions from '../actions';
import * as constants from '../constants';

describe('ProfileShipping actions', () => {
  describe('initState Action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('editShipping Action', () => {
    it('has a type of EDIT_SHIPPING', () => {
      const expected = {
        type: constants.EDIT_SHIPPING,
        payload: '',
      };
      expect(actions.editShipping('')).toEqual(expected);
    });
  });
  describe('editShippingSuccess Action', () => {
    it('has a type of EDIT_SHIPPING_SUCCESS', () => {
      const expected = {
        type: constants.EDIT_SHIPPING_SUCCESS,
      };
      expect(actions.editShippingSuccess()).toEqual(expected);
    });
  });
  describe('editShippingError Action', () => {
    it('has a type of EDIT_SHIPPING_ERROR', () => {
      const expected = {
        type: constants.EDIT_SHIPPING_ERROR,
        payload: 'error',
      };
      expect(actions.editShippingError('error')).toEqual(expected);
    });
  });
  describe('initLoad Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
        payload: '',
      };
      expect(actions.initLoad('')).toEqual(expected);
    });
  });
  describe('initLoadSuccess Action', () => {
    it('has a type of INIT_LOAD_SUCCESS', () => {
      const expected = {
        type: constants.INIT_LOAD_SUCCESS,
        payload: 'success',
      };
      expect(actions.initLoadSuccess('success')).toEqual(expected);
    });
  });
  describe('initLoadError Action', () => {
    it('has a type of INIT_LOAD_ERROR', () => {
      const expected = {
        type: constants.INIT_LOAD_ERROR,
        payload: 'error',
      };
      expect(actions.initLoadError('error')).toEqual(expected);
    });
  });
  describe('changeMapsValue Action', () => {
    it('has a type of CHANGE_MAPS_VALUE', () => {
      const expected = {
        type: constants.CHANGE_MAPS_VALUE,
        payload: 'change',
      };
      expect(actions.changeMapsValue('change')).toEqual(expected);
    });
  });
});
