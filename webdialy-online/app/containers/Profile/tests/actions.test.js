import * as actions from '../actions';
import * as constants from '../constants';

describe('Profile actions', () => {
  describe('initState', () => {
    it('has a type of INIT_STATE', () => {
      const expected = {
        type: constants.INIT_STATE,
      };
      expect(actions.initState()).toEqual(expected);
    });
  });
});
