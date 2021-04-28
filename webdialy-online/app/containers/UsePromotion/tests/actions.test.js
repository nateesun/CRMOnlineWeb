import * as actions from '../actions';
import * as constants from '../constants';

describe('UsePromotion actions', () => {
  describe('initial Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
      };
      expect(actions.initLoad()).toEqual(expected);
    });
  });
  describe('changePage Action', () => {
    it('has a type of CHANGE_PAGE', () => {
      const expected = {
        type: constants.CHANGE_PAGE,
      };
      expect(actions.changePage()).toEqual(expected);
    });
  });
  describe('initLoad Action', () => {
    it('has a type of INIT_LOAD', () => {
      const expected = {
        type: constants.INIT_LOAD,
        payload: 'load',
      };
      expect(actions.initLoad('load')).toEqual(expected);
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
  describe('search Action', () => {
    it('has a type of SEARCH', () => {
      const expected = {
        type: constants.SEARCH,
        payload: 'load',
      };
      expect(actions.search('load')).toEqual(expected);
    });
  });
  describe('searchSuccess Action', () => {
    it('has a type of SEARCH_SUCCESS', () => {
      const expected = {
        type: constants.SEARCH_SUCCESS,
        payload: 'success',
      };
      expect(actions.searchSuccess('success')).toEqual(expected);
    });
  });
  describe('searchError Action', () => {
    it('has a type of SEARCH_ERROR', () => {
      const expected = {
        type: constants.SEARCH_ERROR,
        payload: 'error',
      };
      expect(actions.searchError('error')).toEqual(expected);
    });
  });
});
