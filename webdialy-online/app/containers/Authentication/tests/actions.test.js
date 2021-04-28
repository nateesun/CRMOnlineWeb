/*
 *
 * Authentication actions
 *
 */

import * as actions from '../actions';
import * as constants from '../constants';

describe('Authentication actions', () => {
  describe('loadRole Action', () => {
    it('has a type of LOAD_ROLE', () => {
      const expected = {
        type: constants.LOAD_ROLE,
      };
      expect(actions.loadRole()).toEqual(expected);
    });
  });
  describe('loadRoleSuccess Action', () => {
    it('has a type of LOAD_ROLE_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_ROLE_SUCCESS,
        payload: 'success',
      };
      expect(actions.loadRoleSuccess('success')).toEqual(expected);
    });
  });
  describe('loadRoleError Action', () => {
    it('has a type of LOAD_ROLE_ERROR', () => {
      const expected = {
        type: constants.LOAD_ROLE_ERROR,
        payload: 'error',
      };
      expect(actions.loadRoleError('error')).toEqual(expected);
    });
  });
});
