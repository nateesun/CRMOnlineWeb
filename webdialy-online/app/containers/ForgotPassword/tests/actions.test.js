import * as actions from '../actions';
import * as constants from '../constants';

describe('ForgotPassword actions', () => {
  describe('initState action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('requestPassword action', () => {
    it('has a type of REQUEST_PASSWORD', () => {
      const expected = {
        type: constants.REQUEST_PASSWORD,
        payload: 'reset',
      };
      expect(actions.requestPassword('reset')).toEqual(expected);
    });
  });
  describe('requestPasswordSuccess action', () => {
    it('has a type of REQUEST_PASSWORD_SUCCESS', () => {
      const expected = {
        type: constants.REQUEST_PASSWORD_SUCCESS,
        payload: 'success',
      };
      expect(actions.requestPasswordSuccess('success')).toEqual(expected);
    });
  });
  describe('requestPasswordError action', () => {
    it('has a type of REQUEST_PASSWORD_ERROR', () => {
      const expected = {
        type: constants.REQUEST_PASSWORD_ERROR,
        payload: 'error',
      };
      expect(actions.requestPasswordError('error')).toEqual(expected);
    });
  });
  describe('sendEmail action', () => {
    it('has a type of SEND_EMAIL', () => {
      const expected = {
        type: constants.SEND_EMAIL,
        payload: 'reset',
      };
      expect(actions.sendEmail('reset')).toEqual(expected);
    });
  });
  describe('sendEmailSuccess action', () => {
    it('has a type of SEND_EMAIL_SUCCESS', () => {
      const expected = {
        type: constants.SEND_EMAIL_SUCCESS,
        payload: 'success',
      };
      expect(actions.sendEmailSuccess('success')).toEqual(expected);
    });
  });
  describe('sendEmailError action', () => {
    it('has a type of SEND_EMAIL_ERROR', () => {
      const expected = {
        type: constants.SEND_EMAIL_ERROR,
        payload: 'error',
      };
      expect(actions.sendEmailError('error')).toEqual(expected);
    });
  });
});
