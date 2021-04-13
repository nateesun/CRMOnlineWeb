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
});
