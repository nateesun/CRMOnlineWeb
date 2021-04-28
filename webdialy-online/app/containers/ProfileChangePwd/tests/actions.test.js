import * as actions from '../actions';
import * as constants from '../constants';

describe('ProfileChangePwd actions', () => {
  describe('initState action', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('updatePassword action', () => {
    it('has a type of UPDATE_PASSWORD', () => {
      const expected = {
        type: constants.UPDATE_PASSWORD,
      };
      expect(actions.updatePassword()).toEqual(expected);
    });
  });
  describe('updatePasswordSuccess action', () => {
    it('has a type of UPDATE_PASSWORD_SUCCESS', () => {
      const expected = {
        type: constants.UPDATE_PASSWORD_SUCCESS,
      };
      expect(actions.updatePasswordSuccess()).toEqual(expected);
    });
  });
  describe('updatePasswordError action', () => {
    it('has a type of UPDATE_PASSWORD_ERROR', () => {
      const expected = {
        type: constants.UPDATE_PASSWORD_ERROR,
      };
      expect(actions.updatePasswordError()).toEqual(expected);
    });
  });
});
