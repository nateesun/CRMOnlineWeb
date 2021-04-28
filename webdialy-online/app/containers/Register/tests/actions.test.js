import * as actions from '../actions';
import * as constants from '../constants';

describe('Register actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('addRegisterMember action', () => {
    it('has a type of ADD_REGISTER_MEMBER', () => {
      const expected = {
        type: constants.ADD_REGISTER_MEMBER,
        payload: 'init',
      };
      expect(actions.addRegisterMember('init')).toEqual(expected);
    });
  });
  describe('addRegisterMemberSuccess action', () => {
    it('has a type of ADD_REGISTER_MEMBER_SUCCESS', () => {
      const expected = {
        type: constants.ADD_REGISTER_MEMBER_SUCCESS,
      };
      expect(actions.addRegisterMemberSuccess()).toEqual(expected);
    });
  });
  describe('addRegisterMemberError action', () => {
    it('has a type of ADD_REGISTER_MEMBER_ERROR', () => {
      const expected = {
        type: constants.ADD_REGISTER_MEMBER_ERROR,
        payload: 'error',
      };
      expect(actions.addRegisterMemberError('error')).toEqual(expected);
    });
  });
});
