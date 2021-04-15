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
});
