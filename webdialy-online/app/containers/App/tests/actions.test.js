/**
 * App actions
 */

import * as actions from '../actions';
import * as constants from '../constants';

describe('App actions', () => {
  describe('initLoad Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
      };
      expect(actions.initLoad()).toEqual(expected);
    });
  });
  describe('initLoadSuccess Action', () => {
    it('has a type of INIT_LOAD_SUCCESS', () => {
      const expected = {
        type: constants.INIT_LOAD_SUCCESS,
        payload: 'newPage',
      };
      expect(actions.initLoadSuccess('newPage')).toEqual(expected);
    });
  });
  describe('initLoadError Action', () => {
    it('has a type of INIT_LOAD_ERROR', () => {
      const expected = {
        type: constants.INIT_LOAD_ERROR,
        payload: 'newPage',
      };
      expect(actions.initLoadError('newPage')).toEqual(expected);
    });
  });
  describe('clearMenu Action', () => {
    it('has a type of CLEAR_MENU', () => {
      const expected = {
        type: constants.CLEAR_MENU,
      };
      expect(actions.clearMenu()).toEqual(expected);
    });
  });
});
