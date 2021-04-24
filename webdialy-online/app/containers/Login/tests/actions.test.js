import * as actions from '../actions';
import * as constants from '../constants';

describe('Login actions', () => {
  describe('initDatabase action', () => {
    it('has a type of INIT_DATABASE', () => {
      const expected = {
        type: constants.INIT_DATABASE,
        payload: 'database',
      };
      expect(actions.initDatabase('database')).toEqual(expected);
    });
  });
  describe('initState action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('clearLogin action', () => {
    it('has a type of CLEAR_LOGIN', () => {
      const expected = {
        type: constants.CLEAR_LOGIN,
      };
      expect(actions.clearLogin()).toEqual(expected);
    });
  });
  describe('checkLogin action', () => {
    it('has a type of CHECK_LOGIN', () => {
      const expected = {
        type: constants.CHECK_LOGIN,
        payload: 'login',
      };
      expect(actions.checkLogin('login')).toEqual(expected);
    });
  });
  describe('checkLoginSuccess action', () => {
    it('has a type of CHECK_LOGIN_SUCCESS', () => {
      const expected = {
        type: constants.CHECK_LOGIN_SUCCESS,
        payload: 'success',
      };
      expect(actions.checkLoginSuccess('success')).toEqual(expected);
    });
  });
  describe('checkLoginError action', () => {
    it('has a type of CHECK_LOGIN_ERROR', () => {
      const expected = {
        type: constants.CHECK_LOGIN_ERROR,
        payload: 'error',
      };
      expect(actions.checkLoginError('error')).toEqual(expected);
    });
  });
  describe('checkLogout action', () => {
    it('has a type of CHECK_LOGOUT', () => {
      const expected = {
        type: constants.CHECK_LOGOUT,
      };
      expect(actions.checkLogout()).toEqual(expected);
    });
  });
  describe('checkLogoutSuccess action', () => {
    it('has a type of CHECK_LOGOUT_SUCCESS', () => {
      const expected = {
        type: constants.CHECK_LOGOUT_SUCCESS,
      };
      expect(actions.checkLogoutSuccess()).toEqual(expected);
    });
  });
  describe('checkLogoutError action', () => {
    it('has a type of CHECK_LOGOUT_ERROR', () => {
      const expected = {
        type: constants.CHECK_LOGOUT_ERROR,
        payload: 'error',
      };
      expect(actions.checkLogoutError('error')).toEqual(expected);
    });
  });
  describe('loadProfileFromToken action', () => {
    it('has a type of LOAD_PROFILE_TOKEN', () => {
      const expected = {
        type: constants.LOAD_PROFILE_TOKEN,
        payload: 'token',
      };
      expect(actions.loadProfileFromToken('token')).toEqual(expected);
    });
  });
});
