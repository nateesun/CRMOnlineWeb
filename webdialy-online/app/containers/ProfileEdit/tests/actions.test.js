import * as actions from '../actions';
import * as constants from '../constants';

describe('ProfileEdit actions', () => {
  describe('Initail State', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
  describe('editMember action', () => {
    it('has a type of EDIT_MEMBER', () => {
      const expected = {
        type: constants.EDIT_MEMBER,
        payload: 'payload',
      };
      expect(actions.editMember('payload')).toEqual(expected);
    });
  });
  describe('editMemberSuccess action', () => {
    it('has a type of EDIT_MEMBER_SUCCESS', () => {
      const expected = {
        type: constants.EDIT_MEMBER_SUCCESS,
      };
      expect(actions.editMemberSuccess()).toEqual(expected);
    });
  });
  describe('editMemberError action', () => {
    it('has a type of EDIT_MEMBER_ERROR', () => {
      const expected = {
        type: constants.EDIT_MEMBER_ERROR,
        payload: 'error',
      };
      expect(actions.editMemberError('error')).toEqual(expected);
    });
  });
});
