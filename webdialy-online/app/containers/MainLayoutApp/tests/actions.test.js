import * as actions from '../actions';
import * as constants from '../constants';

describe('MainLayoutApp actions', () => {
  describe('loadProfile Action', () => {
    it('has a type of LOAD_PROFILE', () => {
      const expected = {
        type: constants.LOAD_PROFILE,
      };
      expect(actions.loadProfile()).toEqual(expected);
    });
  });
  describe('loadProfileSuccess Action', () => {
    it('has a type of LOAD_PROFILE_SUCCESS', () => {
      const expected = {
        type: constants.LOAD_PROFILE_SUCCESS,
        payload: 'success',
      };
      expect(actions.loadProfileSuccess('success')).toEqual(expected);
    });
  });
  describe('loadProfileError Action', () => {
    it('has a type of LOAD_PROFILE_ERROR', () => {
      const expected = {
        type: constants.LOAD_PROFILE_ERROR,
        payload: 'error',
      };
      expect(actions.loadProfileError('error')).toEqual(expected);
    });
  });
});
