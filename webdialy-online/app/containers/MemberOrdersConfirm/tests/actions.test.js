import * as actions from '../actions';
import * as constants from '../constants';

describe('MemberOrdersConfirm actions', () => {
  describe('initLoad Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
        payload: 'init',
      };
      expect(actions.initLoad('init')).toEqual(expected);
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
  describe('confirmOrder Action', () => {
    it('has a type of CONFIRM_ORDERS', () => {
      const expected = {
        type: constants.CONFIRM_ORDERS,
        payload: 'init',
      };
      expect(actions.confirmOrder('init')).toEqual(expected);
    });
  });
  describe('confirmOrderSuccess Action', () => {
    it('has a type of CONFIRM_ORDERS_SUCCESS', () => {
      const expected = {
        type: constants.CONFIRM_ORDERS_SUCCESS,
        payload: 'success',
      };
      expect(actions.confirmOrderSuccess('success')).toEqual(expected);
    });
  });
  describe('confirmOrderError Action', () => {
    it('has a type of CONFIRM_ORDERS_ERROR', () => {
      const expected = {
        type: constants.CONFIRM_ORDERS_ERROR,
        payload: 'error',
      };
      expect(actions.confirmOrderError('error')).toEqual(expected);
    });
  });
});
