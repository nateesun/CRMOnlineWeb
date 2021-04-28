import * as actions from '../actions';
import * as constants from '../constants';

describe('Dashboard actions', () => {
  describe('initState Action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('loadRedeem Action', () => {
    it('has a type of LOAD_REDEEM', () => {
      const expected = {
        type: constants.LOAD_REDEEM,
        payload: 'load',
      };
      expect(actions.loadRedeem('load')).toEqual(expected);
    });
  });
  describe('loadRedeemSuccess Action', () => {
    it('has a type of LOAD_REDEEM_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_REDEEM_SUCCESS,
        payload: 'success',
      };
      expect(actions.loadRedeemSuccess('success')).toEqual(expected);
    });
  });
  describe('loadRedeemError Action', () => {
    it('has a type of LOAD_REDEEM_ERROR', () => {
      const expected = {
        type: constants.LOAD_REDEEM_ERROR,
        payload: 'error',
      };
      expect(actions.loadRedeemError('error')).toEqual(expected);
    });
  });
  describe('createRedeem Action', () => {
    it('has a type of CREATE_REDEEM', () => {
      const expected = {
        type: constants.CREATE_REDEEM,
        payload: 'load',
      };
      expect(actions.createRedeem('load')).toEqual(expected);
    });
  });
  describe('createRedeemSuccess Action', () => {
    it('has a type of CREATE_REDEEM_SUCCESS', () => {
      const expected = {
        type: constants.CREATE_REDEEM_SUCCESS,
        payload: 'success',
      };
      expect(actions.createRedeemSuccess('success')).toEqual(expected);
    });
  });
  describe('createRedeemError Action', () => {
    it('has a type of CREATE_REDEEM_ERROR', () => {
      const expected = {
        type: constants.CREATE_REDEEM_ERROR,
        payload: 'error',
      };
      expect(actions.createRedeemError('error')).toEqual(expected);
    });
  });
});
