import * as actions from '../actions';
import * as constants from '../constants';

describe('LineLogin actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('Initail State', () => {
    it('has a type of VERIFY_TOKEN', () => {
      const expected = {
        type: constants.VERIFY_TOKEN,
        payload: 'init',
      };
      expect(actions.verifyToken('init')).toEqual(expected);
    });
  });
  describe('Initail State', () => {
    it('has a type of VERIFY_TOKEN_SUCCESS', () => {
      const expected = {
        type: constants.VERIFY_TOKEN_SUCCESS,
        payload: 'success',
      };
      expect(actions.verifyTokenSuccess('success')).toEqual(expected);
    });
  });
  describe('Initail State', () => {
    it('has a type of VERIFY_TOKEN_ERROR', () => {
      const expected = {
        type: constants.VERIFY_TOKEN_ERROR,
        payload: 'error',
      };
      expect(actions.verifyTokenError('error')).toEqual(expected);
    });
  });
});
